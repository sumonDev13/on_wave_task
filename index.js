import express from "express";
import dotenv from "dotenv";
import exphbs from "express-handlebars";
import bodyParser from "body-parser";

import uploadRouter from "./controllers/uploadController.js";
import userRoute from "./routes/userRoute.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

const handlebars = exphbs.create({ extname: ".hbs" });
app.engine(".hbs", handlebars.engine);
app.set("view engine", ".hbs");

// connectionPool.getConnection((err, connection) => {
//   if (err) throw err;
//   console.log("connected to database " + connection.threadId);
//   // Don't forget to release the connection after use
 
// });

app.use('/',userRoute);
app.use('/api/upload',uploadRouter);


app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
