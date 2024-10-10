import multer from "multer";
const path = require("path");


module.exports = {
    dest: path.resulve(__dirname, 'configAWS.js'),
    storage: multer.diskStorage({

    }),
    limits: {

    },
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            'image/jpeg',
            'image/png',
            'image/pjpeg'
        ]
    },
}