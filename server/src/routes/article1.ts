import { Router } from "express";
import { getAllArticle, postArticle } from "../controllers/article1";


export const routes1 = Router();

routes1.post("/register", postArticle).get("/articles",getAllArticle);
