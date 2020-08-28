/* eslint-disable @typescript-eslint/interface-name-prefix */
import * as React from "react";
import { Url } from "./Utility";
import { Pagination } from "./Tabs/Pagination";

export interface ITable {
    headers: any[];
    settings: any;
}

export class Table extends React.Component<ITable, { data: any[], pageNumber: number }> {

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
            data: [],
            pageNumber: 0
        };
    }

    componentDidMount() {


    }

    getProjects(pageNumber: number) {

        const { url, pageSize } = this.props.settings;

        const postUrl = new Url(url);

        fetch(postUrl.href, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                pageSize: pageSize,
                pageNumber: this.state.pageNumber
            })
        })
            .then(response => {
                if (!response.ok)
                    throw new Error("Network error");
                return response.json();
            })
            .then(res => this.setState({
                data: res,
                pageNumber: res.pageNumber
            })
            )
            .catch(error => {
                console.error(error.message);
            });
    }

    render() {

        return (
            <div>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            {this.props.headers.map((header: any, index: any) => {
                                return (
                                    <th scope="col" key={index}>{header.Acessor}</th>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((row: any) => {
                            return (
                                <tr key={row._id} >{Object.entries(row).map((value: [string, any], index: any) => {
                                    return (
                                        <td key={index} >{value[1]}</td>
                                    );
                                })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <Pagination pageNumber={this.state.pageNumber} handleClick={this.getProjects} />
            </div>
        );
    }
}
