import * as React from "react"
import { Clock } from "./Clock"

export class Tasks extends React.Component<{}, {}>{

    render() {
        return (
            <div className="py-5 text-center fade-in">
                <Clock>
                </Clock>
            </div>
        )
    }
} 