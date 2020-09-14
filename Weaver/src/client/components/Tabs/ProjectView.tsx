import * as React from "react"
import axios from "axios"
import { Link, useParams, withRouter } from "react-router-dom"
import { Projects } from "./Projects"
import { use } from "passport"

class project{
    name: string
    description: string
    user:string
} 

export class ProjectView extends React.Component<any, {project: project}>{

    private project: project

    constructor(props: any) {
        super(props);
        this.state = {
            project: new project()
        }
    }

    componentDidMount() { 

        axios.post<project>(this.props.location.pathname + this.props.location.search)
            .then(res => {
                this.setState({
                    project: res.data
                })
            }).catch( e => {
                console.error(e)
            })
    }

    render() {
        return (
            <div >
                <div>
                    <h3>{this.state.project.name}</h3>
                </div>
                <div >
                    <h4>Description</h4>
                    <p>{this.state.project.description}</p>
                </div>
                <div >
                    <h4>User</h4>
                    <p>{this.state.project.user}</p>
                </div>
                <Link to="/project"><button type="button" id="Delete" className="btn btn-primary">Back</button></Link>
            </div>
        )
    }
}
