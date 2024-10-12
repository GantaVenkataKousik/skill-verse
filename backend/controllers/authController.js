import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/users.js';
import { getUserByRefreshToken, saveRefreshToken } from '../utils/tokenUtils.js';
import { validateEmail, toTitleCase } from '../helpers/authHelper.js';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

export const registerController = async (req, res) => {
    const { name, email, password, phoneNo, isGoogleUser, photoUrl } = req.body;
    let error = {};

    try {
        if (!name || !email || !password) {
            error = {
                ...error,
                name: "Field must not be empty",
                email: "Field must not be empty",
                password: "Field must not be empty",
                phoneNo: "Field must not be empty"
            };
            return res.status(400).json({ error });
        }

        if (!validateEmail(email)) {
            error = { ...error, email: "Email is not valid" };
            return res.status(400).json({ error });
        }

        if (password.length < 5) {
            error = { ...error, password: "Password must be at least 5 characters" };
            return res.status(400).json({ error });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            error = { ...error, email: "Email already exists" };
            return res.status(400).json({ error });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name: toTitleCase(name),
            email,
            password: hashedPassword,
            phoneNo,
            isGoogleUser,
            photoUrl
        });
        await newUser.save();

        const accessToken = jwt.sign({ id: newUser._id }, JWT_SECRET, { expiresIn: '15m' });
        const refreshToken = jwt.sign({ id: newUser._id }, JWT_SECRET, { expiresIn: '7d' });

        await saveRefreshToken(newUser._id, refreshToken);

        return res.json({ accessToken, refreshToken, success: "Account created successfully. Please login." });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Error in Registration" });
    }
};

export const loginController = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.sendStatus(401);

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.sendStatus(401);

    const accessToken = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '15m' });
    const refreshToken = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '7d' });

    await saveRefreshToken(user._id, refreshToken);

    res.json({ accessToken, refreshToken });
};



router.post('/token', async (req, res) => {
    const { refreshToken } = req.body;

    if (!refreshToken) return res.sendStatus(401);

    try {
        const user = await getUserByRefreshToken(refreshToken);
        if (!user) return res.sendStatus(403);

        const accessToken = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '15m' });

        res.json({ accessToken });
    } catch (error) {
        console.error("Error refreshing token:", error);
        res.sendStatus(500);
    }
});

export default router;