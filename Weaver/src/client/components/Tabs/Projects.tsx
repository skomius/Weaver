import * as React from "react"
import { Table } from "../Table"
import {
    Link
} from "react-router-dom"
import { ProjectView } from "./ProjectView";
import { stringify } from "querystring";

export class Projects extends React.Component<{}, { projectPage: boolean, id: string }>{

    private data: any;

    constructor(props: any) {
        super(props)
        this.state = {
            projectPage: false,
            id: ""
        }

        this.rowClickHandler = this.rowClickHandler.bind(this);
    }

    Headers: any = [
        {
            Header: "Id",
            Acessor: "Id",
            Type: "string",
            Link: false,
            width: 1,
            show: false
        },
        {
            Header: "TestTest",
            Acessor: "Name",
            Type: "string",
            Link: false,
            width: 40,
            show: true
        },
        {
            Header: "TestTest",
            Acessor: "Description",
            Type: "string",
            Link: false,
            width: 150,
            show: true,
        },
        {
            Header: "TestTest",
            Acessor: "User",
            Type: "string",
            Link: false,
            width: 150,
            show: true,
        }
    ]

    rowClickHandler = (evn: any, id: string) => {
        history.pushState({}, "", "project/getProject")
        this.setState({
            projectPage: true,
            id: id 
        });
    };

    Settings: any = {
        url: "project/getProjects",
        pageSize: 20,
        rowClickHandler: this.rowClickHandler
    }

    render() {

        if (this.state.projectPage)
            var content = <ProjectView id={this.state.id} />
        else
            content =
                <div>
                    <div className="container">
                        <Link to="/Projects/ProjectForm"><button type="button" className="btn btn-primary mt-3">New</button></Link>
                    </div>
                    <div className="container py-3 fade-in" >
                        <Table headers={this.Headers} settings={this.Settings} />
                    </div>
                </div>


        return (
            <div className="container py-3 fade-in">
                <div className="col-8">{content}</div>
                <div className="col-4"></div>
            </div>
        )
    }
}   
