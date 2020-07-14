import {Request, Response} from "express";
import {Project} from "../models/Project";
import { connectNats } from "../util/nats"

export const getAll = async (req: Request, res: Response, next: any ) => {  
    var json = req.body;

    console.log(req.body);

    try {
        var con = await connectNats();
    } catch (error) {
      return next(error)   
    }

    con.publish('test', '{ pica: 5, sriuba: 3}')
    console.log("published") 
    
    con.publish('project', '{ pica: 5, sriuba: 3}')
    console.log("published") 

    const all = Project.find({}, (err, projects) =>{
        res.json(projects);
    } ); 

};