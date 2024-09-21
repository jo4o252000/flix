import { Request, Response, NextFunction } from "express";
import { SaveNewCategories } from "../../../use_cases/media/SaveNewCategories";

export class CategoryController{
    constructor(private saveNewCategories: SaveNewCategories){}

    async saveCategories(req:Request, res:Response){
        try{
            const newCategories = req.body;
    
            const result = await this.saveNewCategories.execute(newCategories);
            res.status(200).send(result)
        }catch(error){
            console.error(`Erro ao salver nova categoria ${error}`)
            res.status(500).json({status:500, message:"Erro ao salver nova categoria"})
        }
    }
}
