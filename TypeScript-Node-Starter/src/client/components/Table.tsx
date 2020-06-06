/* eslint-disable @typescript-eslint/interface-name-prefix */
import * as React from "react";
import { Url } from "./Utility";

export interface ITable {
    headers: any[];
    settings: any;
}

export class Table extends React.Component<ITable, { data: any[] }> {


    private headerStyle: any = {
        color: "red",
        borderStyle: "solid"
    }

    private cellStyle: any = {
        color: "red",
    }

    private tableStyle: any = {

    }

    constructor(props: any) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {

        const { Url, pageSize, pageNumber } = this.props.settings;

        const url = new Url(Url);
        url.searchParams.append("pageSize", pageSize);
        url.searchParams.append("pageSize", pageSize);
        url.searchParams.append("pageNumber", pageNumber);
        fetch(url.href)
            .then(response => {
                if (response.ok)
                    throw new Error("Network error");
                return response.json();
            })
            .then(res => this.setState({
                data: res
            })
            )
            .catch(error => {
                console.error(error.message);
            });
    }


    render() {

        return (
            <div>
                <table>
                    <thead style={this.headerStyle}>
                        <tr>
                            {
                                this.props.headers.map((header: any, index: any) => {
                                    return (
                                        <th key={index}>{header.name}</th>
                                    );
                                })}
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((row: any) => {
                            return (
                                <tr key={row.id}>{row.map((value: any, index: any) => {
                                    return (
                                        <td key={index} >{value}</td>
                                    );
                                })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}
