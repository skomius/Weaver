/* eslint-disable @typescript-eslint/interface-name-prefix */
import * as React from "react";
import { Url } from "./Utility";
import { Pagination } from "./Tabs/Pagination";

export interface ITable {
    headers: any[];
    settings: any;
}

export class Table extends React.Component<ITable, { data: any[], pageIndex: number, pagesNumber: number}> {




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
            pageIndex: 0,
            pagesNumber: 0
        };

        this.getProjects = this.getProjects.bind(this);
    }

    componentDidMount() {
        this.getProjects(0)
    }

    getProjects(pageIndex: number) {

        if(pageIndex < 0){
            return
        }

        const { url, pageSize } = this.props.settings;

        const postUrl = new Url(url);

        fetch(postUrl.href, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                pageSize: pageSize,
                pageIndex: pageIndex
            })
        })
            .then(response => {
                if (!response.ok)
                    throw new Error("Network error");
                return response.json();
            })
            .then(res => this.setState({
                data: res.data,
                pagesNumber: res.pagesNumber,
                pageIndex: pageIndex
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
                <Pagination  handleClick={this.getProjects} pageIndex={this.state.pageIndex}  pagesNumber={this.state.pagesNumber} />
            </div>
        );
    }
}
