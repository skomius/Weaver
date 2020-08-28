import * as React from "react"

export class Pagination extends React.Component<{handleClick: any, pageNumber: number}, {}>{

    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <nav>
                <ul className="pagination">
                    <li className={`page-item ${active ? "active" : ""}`} onClick={() => this.props.handleClick(this.props.pageNumber)}><a className="page-link" href="#">Previous</a></>
                    <li className="page-item" onClick={() => this.props.handleClick(this.props.pageNumber)}><a className="page-link" href="#">Next</a></li>
                </ul>
            </nav>
        )
    }
} 