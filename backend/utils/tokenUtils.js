// utils/tokenUtils.js
import User from '../models/User'; // Adjust the import based on your project structure

/**
 * Retrieves a user by the refresh token.
 * @param {string} refreshToken - The refresh token to search for.
 * @returns {Promise<Object|null>} - Returns the user document or null if not found.
 */
export const getUserByRefreshToken = async (refreshToken) => {
    try {
        const user = await User.findOne({ refreshToken });
        return user; // Returns the user document or null if not found
    } catch (error) {
        console.error("Error retrieving user by refresh token:", error);
        throw new Error("Database error"); // Handle or log the error as needed
    }
};

/**
 * Saves the refresh token for a user.
 * @param {string} userId - The ID of the user.
 * @param {string} refreshToken - The refresh token to save.
 * @returns {Promise<void>}
 */
export const saveRefreshToken = async (userId, refreshToken) => {
    try {
        await User.findByIdAndUpdate(userId, { refreshToken }, { new: true, upsert: true });
        // `upsert: true` will create a new document if it doesn't exist
    } catch (error) {
        console.error("Error saving refresh token:", error);
        throw new Error("Database error"); // Handle or log the error as needed
    }
};
