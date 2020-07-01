import {Request, Response} from "express";
import {Project} from "../models/Project";
import mongoose from "mongoose";

export const getAll = (req: Request, res: Response ) => {  
    var json = req.body;

    console.log(req.body)

    const all = Project.find({}, (err, projects) =>{
        res.json(projects);
    } ); 
};