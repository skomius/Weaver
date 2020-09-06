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
    axios.post("project/create", data)
  }

  clickedBack(){
     
  }

  render() {
    return (
      <div className = "lm-5 ty-5" >
      <form onSubmit={this.handleSubmit} >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" name="name" placeholder="Name" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea className="form-control" id="description" name="description" placeholder="Description" cols={300} rows={5} style={{width:"500px"}}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="user">Description</label>
          <input type="textbox" className="form-control" id="user" name="user" placeholder="user" />
        </div>
        <button type="submit" className="btn btn-primary">Create</button>
        <button type="button" id="back" className="btn btn-primary">Back</button>
      </form>
      </div>
    )
  }
} 