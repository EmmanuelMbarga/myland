import { Router } from "express";
import {
  GetAllUser,
  UpdateUser,
  deleteUser,
  oneUser,
  register,
} from "../controllers/user";


export const route = Router();

//route pour le Crud
route
  .post("/register", register)
  .get("/users", GetAllUser)
  .route("/:id")
  .get(oneUser)
  .delete(deleteUser)
  .put(UpdateUser);


