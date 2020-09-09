import * as React from "react"
import axios from "axios"
import * as Util from "../Utility"

export class ProjectForm extends React.Component<{}, {}>{

  constructor(props: any) {
        super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: any ) {

    event.preventDefault()

    let data = Util.createObjectFromFormData(new FormData(event.target))

    console.log(JSON.stringify(data))
    
    axios.post("project/create", data)
    
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <div className="form-group row">
          <label htmlFor="name">Name</label>
          <input type="textbox" className="form-control" id="name" name="name" placeholder="Name" />
        </div>
        <div className="form-group row">
          <label htmlFor="description">Description</label>
          <input type="textbox" className="form-control" id="description" name="description" placeholder="Description" />
        </div>
        <div className="form-group row">
          <label htmlFor="user">Description</label>
          <input type="textbox" className="form-control" id="user" name="user" placeholder="user" />
        </div>
        <button type="submit" className="btn btn-primary">Create</button>
        <button type="button" id="back" className="btn btn-primary">Back</button>
      </form>
    )
  }
} 