import { Request, Response } from "express";
import mongoose, { Collection } from "mongoose";
import { Project } from "../models/Project";
import { connectNats } from "../util/nats"

export const getAll = async (req: Request, res: Response, next: any) => {
   
    const { pageIndex, pageSize } = req.body;

    let pagesNumber: number
    let data: any

    var session = await mongoose.startSession()

    session.startTransaction();
    const numberOfProjects = await Project.collection.countDocuments({}, { session: session })
    pagesNumber = Math.ceil(numberOfProjects / pageSize)
    data = await Project.find({}).skip(pageIndex * pageSize).limit(pageSize).session(session);
    await session.commitTransaction();
    session.endSession();

    console.log(pagesNumber, pageIndex, pageSize)

    res.json({ pagesNumber: pagesNumber, data: data })
};

export const getDumentPage = async(model: mongoose.Document) => {
    
}
