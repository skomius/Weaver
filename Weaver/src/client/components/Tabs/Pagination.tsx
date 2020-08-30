import * as React from "react"

export class Pagination extends React.Component<{handleClick: any, pageIndex: number, pagesNumber: number}, {}>{


    constructor(props: any) {
        super(props)
    }

    render() {

        const { handleClick, pageIndex, pagesNumber} = this.props
        
        let previous = pageIndex - 1
        let next = pageIndex + 1    

        let nextControl = next >= pagesNumber 

        return (

            <nav>
                <ul className="pagination">
                    <li className={`page-item ${previous < 0 ? "disabled" : ""}`} onClick={() => handleClick(previous)}><a className="page-link" href="#">Previous</a></li>
                    <li className={`page-item ${nextControl ? "disabled" : ""}`} onClick={() => nextControl ? null : handleClick(next)}><a className="page-link" href="#">Next</a></li>
                </ul>
            </nav>
        )
    }
} 