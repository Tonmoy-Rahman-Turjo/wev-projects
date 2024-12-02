import { NextFunction, Request, Response } from "express";
import { userServices } from "./user.services";
import { any, date } from "joi";
import { error } from "console";



const createStudnet = async(req: Request, res: Response, next:  NextFunction)=>{
    try{
    const {password, student: stundetData} = req.body
    // console.log(password)
    const result = await userServices.creatuserFormDB(password, stundetData)
     res.status(200).json({
        success: true,
       message: 'creat a user successfuly',
       data: result
     })
   
    } catch(err){
      next(err)
    }
}

 export const userControlar ={
    createStudnet
}