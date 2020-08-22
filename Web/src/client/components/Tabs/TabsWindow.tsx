import * as React from "react"
import { Tasks } from "./Tasks"
import { Projects } from "./Projects"
import { BrowserRouter,
    Switch,
    Route,
    NavLink
 } from "react-router-dom"

export class TabsWindow extends React.Component<{}, {}>{

    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <BrowserRouter>
                <div className = "py-5">
                    <ol  className="nav nav-tabs">
                        <li>
                            <NavLink to="/Projects" className="nav-link" activeClassName="active" >Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Tasks" className="nav-link" activeClassName="active" >Tasks</NavLink>
                        </li>
                    </ol>

                    <hr />

                    <Switch>
                        <Route exact path="/Projects">
                            <Projects/>
                        </Route>
                        <Route path="/Tasks">
                            <Tasks/>
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
} 