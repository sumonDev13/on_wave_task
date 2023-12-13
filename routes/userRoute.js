import express from 'express';
import { addUser, form, viewUser } from '../controllers/userController.js';

const userRoute = express.Router();

userRoute.get("/", viewUser);
userRoute.post("/addUser", addUser);
userRoute.get("/addUser", form);

  export default userRoute;