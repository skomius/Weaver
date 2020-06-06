import mongoose from "mongoose";

export type ProjectDocument = mongoose.Document & {
    name: string;
    description: string;
    user: string;
}

const ProjectSchema = new mongoose.Schema({
    name: String,
    description: String,
    user: String
}, { timestamps: true });

export const Project = mongoose.model<ProjectDocument>("Project", ProjectSchema);