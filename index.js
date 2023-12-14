import express from "express";
import dotenv from "dotenv";
import exphbs from "express-handlebars";
import bodyParser from "body-parser";
import cors from "cors";
import { upload } from "./uploader/uploader.js";

import uploadRouter from "./controllers/uploadController.js";
import userRoute from "./routes/userRoute.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static("public"));

const handlebars = exphbs.create({ extname: ".hbs" });
app.engine(".hbs", handlebars.engine);
app.set("view engine", ".hbs");

app.use("/images", express.static("public/images"));
app.use("/", userRoute);
app.use("/api/upload", uploadRouter);

const logoUpload = upload.single("image");
app.post("/test/upload", (req, res) => {
  logoUpload(req, res, (err) => {
    if (err) {
      if (err.code === "LIMIT_FILE_SIZE") {
        return res.status(400).send("file size exceeds maximum limit");
      }
      console.log(err.message);
      return res.status(400).send({ error: err.message });
    }

    console.log("i am here::", req.file.path);
    return res.send("file uploaded successfully");
  });
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
