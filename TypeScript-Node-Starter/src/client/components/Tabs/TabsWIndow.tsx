import * as React from "react"
import {Tabs} from "./Tabs"
import {Tasks} from "./Tasks"
import {Projects} from "./Projects"

export class TabsWindow extends React.Component<{}, {}>{

    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <div>
                <Tabs>
                    <Projects label="Project"/>
                    <Tasks label="Tasks"/>
                </Tabs>
            </div>
        );
    }
} 