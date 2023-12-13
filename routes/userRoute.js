import express from 'express';

const userRoute = express.Router();

userRoute.get("/", (req, res) => {
    res.render("home");
  });

  export default userRoute;