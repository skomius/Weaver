import * as React from "react"
import { Table } from "../Table"
import {
   Link  
} from "react-router-dom"

export class Projects extends React.Component<{}, { projectPage: boolean }>{

    private data: any;

    constructor(props: any) {
        super(props)
        this.state = {
            projectPage: false
        }
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

    Settings: any = {
        url: "project/getProjects",
        pageSize: 20,
        rowClickHandler: (evn: any) => {
            evn.target.getAttribute("id")
        }
    }

    render() {
        
        return (
            <div>
                <div className="container">
                    <Link to="/ProjectForm"><button type="button" className="btn btn-primary mt-3">New</button></Link>
                </div>
                <div className="py-3 fade-in"> 
                    <div className="col-8">
                        <Table headers={this.Headers} settings={this.Settings} />
                    </div>
                    <div className="col-4">

                    </div>
                </div>
            </div>
        )
    }
}   
