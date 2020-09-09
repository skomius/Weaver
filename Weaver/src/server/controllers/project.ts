import { Request, Response, response } from "express";
import mongoose, { Collection } from "mongoose";
import { Project } from "../models/Project";
import { connectNats } from "../util/nats"
import { STATUS_CODES } from "http";

export const getAll = async (req: Request, res: Response, next: any) => {
   
    const { pageIndex, pageSize } = req.body;

    let pagesNumber: number = 0
    let data: any = []

    var session = await mongoose.startSession()

    session.startTransaction();
    const numberOfProjects = await Project.collection.countDocuments({}, { session: session }).catch(

    )
    pagesNumber = Math.ceil(numberOfProjects / pageSize)
    data = await Project.find({}).skip(pageIndex * pageSize).limit(pageSize).session(session);
    await session.commitTransaction();
    session.endSession();

    await res.json({ pagesNumber: pagesNumber, data: data })
};

export const create = async (req: Request, res: Response, next: any) => {
   
    console.log(req.body)

    await Project.collection.insertOne(req.body, (err, result) =>{
        if(result.result.ok)
            console.log("succsefull")
    })

};

export const getProject = async (req: Request, res: Response, next: any) => {

    console.log(req.query.id)
    const project = await Project.findById(req.query.id)
    //res.setHeader("Content-Type", "application/json")
    await res.json(project)
} 

export const getDocumentPage = async(model: mongoose.Document) => {
    
}
