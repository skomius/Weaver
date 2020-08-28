import {Request, Response} from "express";
import {Project} from "../models/Project";
import { connectNats } from "../util/nats"

export const getAll = async (req: Request, res: Response, next: any ) => {  
    var json = req.body;

    console.log(req.body);

    const { pageNumber, pageSize } = req.body;

    const all = Project.find({}, (err, projects) =>{
        res.json(projects);
    } ).skip(pageNumber - 1 * pageSize).limit(pageSize); 
};