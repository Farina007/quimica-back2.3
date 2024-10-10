import multer from 'multer';
import multerS3 from 'multer-s3';
import AWS from 'aws-sdk'
const s3 = new AWS.S3();

const  upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'quimicainbox',
    key: function (req, file, cb) {
      cb(null, Date.now().toString() + file.originalname);
    }
  })
});

export default upload

