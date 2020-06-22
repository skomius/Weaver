import * as React from "react"
import { ITab } from "./Tabs"
import { Table } from "../Table"
import { Url } from "../Utility"

export class Projects extends React.Component<ITab, {}>{

    private data: any;

    constructor(props: ITab) {
        super(props)

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
        }
    ]


    Settings: any = {
        url: "Project/GetAll"
    }

    render() {
        return (
            <Table headers={this.Headers} settings={this.Settings} />
        )
    }
}   
