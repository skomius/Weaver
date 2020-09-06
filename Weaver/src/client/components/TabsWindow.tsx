import * as React from "react"
import { Tasks } from "./Tabs/Tasks"
import { Projects } from "./Tabs/Projects"
import { ProjectForm } from "./Tabs/ProjectForm"
import { Logs} from "./Tabs/Logs"
import { Login} from "./Tabs/Login"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom"

export class TabsWindow extends React.Component<{}, {}>{

    render() {

        return (
             <div className="container">
                <Router>
                    <div className="py-5">
                        <ol className="nav nav-tabs">
                            <li>
                                <NavLink to="/Projects" className="nav-link" activeClassName = "active">Projects</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Tasks" className="nav-link"  activeClassName = "active">Tasks</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Logs" className="nav-link" activeClassName = "active">Logs</NavLink>
                            </li>
                        </ol>
                        <Switch>
                                <Route exact path="/" children={<Login />} />
                                <Route exact path="/Tasks" children={<Tasks />} />
                                <Route exact path="/Projects/ProjectForm" children={<ProjectForm />} />
                                <Route exact path="/Logs" children={<Logs />} />
                                <Route exact path="/Projects" children={<Projects />} />
                        </Switch>
                    </div>
                </Router>
             </div>
        );
    }
} 