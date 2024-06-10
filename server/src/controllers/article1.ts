import ModelArticle from "../models/article1";
import { Request,Response } from "express";



export const getAllArticle=async(req:Request,res:Response)=>{
    try {
        const article=await ModelArticle.find()

        res.status(200).json(article)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const postArticle=async(req:Request,res:Response)=>{
    try {
        const {articleId,_id,title,description,price,photos}=req.body
        const Article=await ModelArticle.create({articleId,_id,title,description,price,photos})
        res.status(200).json(Article)
        
    } catch (error) {
        res.status(500).json(error)
    }
}