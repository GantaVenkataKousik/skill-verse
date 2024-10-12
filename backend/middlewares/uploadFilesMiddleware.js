import util from 'util';
import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import dbConfig from '../config/db.js';

const storage = new GridFsStorage({
    url: `${dbConfig.url}${dbConfig.database}`,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
        const match = ['image/png', 'image/jpeg'];

        if (!match.includes(file.mimetype)) {
            return `${Date.now()}-bezkoder-${file.originalname}`;
        }

        return {
            bucketName: dbConfig.imgBucket,
            filename: `${Date.now()}-bezkoder-${file.originalname}`,
        };
    },
});

const uploadFiles = multer({ storage }).array('file', 10);
// const uploadFiles = multer({ storage }).single('file');
const uploadFilesMiddleware = util.promisify(uploadFiles);

export default uploadFilesMiddleware;