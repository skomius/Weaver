import * as React from "react"
import { ITab } from "./Tabs"
import { Table } from "../Table"
import { CSSTransition } from "react-transition-group";

export class Projects extends React.Component<ITab, {projectPage: boolean}>{

    private data: any;

    constructor(props: ITab) {
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
        rowClickHandler: (evn: any) => {
            evn.target.getAttribute("id")
        }
    }

    render() {
        return (
            <div className="py-3 fade-in">
                <div className="col-8">
                    <Table headers={this.Headers} settings={this.Settings} />
                </div>
                <div className="clo-4">
                
                </div>
            </div>
        )
    }
}   
