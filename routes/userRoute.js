import express from 'express';
import { addUser, deleteUser, form, viewUser } from '../controllers/userController.js';

const userRoute = express.Router();

userRoute.get("/", viewUser);
userRoute.post("/addUser", addUser);
userRoute.get("/addUser", form);
userRoute.get("/:ID", deleteUser);

  export default userRoute;