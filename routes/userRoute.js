import express from 'express';
import { addUser, deleteUser, form, home, viewUser } from '../controllers/userController.js';

const userRoute = express.Router();

userRoute.get('/',home);
userRoute.get("/users", viewUser);
userRoute.post("/addUser", addUser);
userRoute.get("/addUser", form);
userRoute.get("/:id", deleteUser);

  export default userRoute;