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
import { ProjectView } from "./Tabs/ProjectView"

export class TabsWindow extends React.Component<{}, {}>{

    render() {

        return (
             <div className="container">
                <Router>
                    <div className="py-5">
                        <ol className="nav nav-tabs">
                            <li>
                                <NavLink to="/project" className="nav-link" activeClassName = "active">Projects</NavLink>
                            </li>
                            <li>
                                <NavLink to="/task" className="nav-link"  activeClassName = "active">Tasks</NavLink>
                            </li>
                            <li>
                                <NavLink to="/logs" className="nav-link" activeClassName = "active">Logs</NavLink>
                            </li>
                        </ol>
                        <Switch>
                                <Route exact path="/" children={<Login />} />
                                <Route exact path="/task" children={<Tasks />} />
                                <Route exact path="/project/projectForm" children={<ProjectForm />} />
                                <Route exact path="/Logs" children={<Logs />} />
                                <Route exact path="/project" render = {(props) => (<Projects {...props}/>)} />
                                <Route path="/project/getProject" render = {(props) => (<ProjectView {...props}/>)} />
                        </Switch>
                    </div>
                </Router>
             </div>
        );
    }
} 