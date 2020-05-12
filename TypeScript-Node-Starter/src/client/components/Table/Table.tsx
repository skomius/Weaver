import * as React from "react"
import { Url } from "../Utility"

export interface ITable {
    headers: any[],
    settings: any
}

export class Table extends React.Component<ITable, { data: any }> {

    // private TableSettings: any = {

    //     Setting:{
    //         HeaderHeigth: 0,
    //         PageSize: 20,
    //     },

    //     Columns:
    //     {
    //         Header: "",
    //         Acessor: "",
    //         Type: "string" ,
    //         Link: false,
    //         width: 1,
    //     }
    // }

    headerStyle: any = {
        color: "red",
    }

    cellStyle: any = {
        color: "red",
    }

    tableStyle: any = {

    }


    // private data: any = [
    //     {
    //         Header: "sa",
    //         Description: "asfsa",
    //         TasksUrl: "asffa",
    //         LogsUrl: "saffa"
    //     },
    //     {
    //         Header: "saf",
    //         Description: "asfsa",
    //         TasksUrl: "asfsfa",
    //         LogsUrl: "safsfa"
    //     }, 
    // ]

    constructor(props: any) {
        super(props)

        const [data, setData] = React.useState(null)

        const { dataUrl, pageSize, pageNumber } = this.props.settings

        React.useEffect(() => {
            var url = new Url(dataUrl)
            url.searchParams.append("pageSize", pageSize)
            url.searchParams.append("pageNumber", pageNumber)
            fetch(url.href)
                .then(response => {
                    if (response.ok)
                        throw new Error("Network error")
                    setData(response.json())

                })
                .catch(error => {
                    console.error(error.message)
                })
        })
    }

    render() {

        return (
            <div>
                <table>
                    <thead style={this.headerStyle}>
                        {  
                         this.props.headers.map((header: any) => {
                            return (
                                <th>{header.name}</th>
                            )
                        })}
                    </thead>
                    <tbody>
                        {this.state.data.map((row: any) => {
                            return (
                                <tr>{row.map((value: any) => {
                                    return (
                                        <td>{value}</td>
                                    )
                                })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}