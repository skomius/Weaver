import * as React from "react"
import { ITab } from "./Tabs"
import { Clock } from "./Clock"

export class Tasks extends React.Component<ITab, {}>{

    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <div className="py-5 text-center fade-in">
                <Clock>
                </Clock>
            </div>
        )
    }
} 