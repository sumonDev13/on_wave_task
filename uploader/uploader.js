import multer from "multer";
import path from "path";

const maxSize = 1024 * 1024 * 10;
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const date = Date.now();
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);

    const extensionName = path.extname(file.originalname);
    
    cb(null, file.fieldname + "-" + uniqueSuffix + extensionName);
  },
});

export const upload = multer({
  storage: storage,
  fileFilter: (req, file, callback) => {
    
    const ext = path.extname(file.originalname);
    const mime = file.mimetype;
    

    if (
      mime !== "image" &&
      ext !== ".png" &&
      ext !== ".jpg" &&
      ext !== ".gif" &&
      ext !== ".jpeg"
    ) {
      
      return callback(new Error("Only images allowed"));
    }
    callback(null, true);
  },
  limits: { fileSize: maxSize },
});