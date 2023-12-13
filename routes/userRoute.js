import express from 'express';
import { viewUser } from '../controllers/userController.js';

const userRoute = express.Router();

userRoute.get("/", viewUser);

  export default userRoute;