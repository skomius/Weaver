import * as React from "react"

export interface ITab {
    label: string 
}

export class ITabs {children: any[] }

export class Tabs extends React.Component<ITabs, {activeTabTitle: string}>{

    constructor(props: ITabs){
        super(props)
        this.state = {
            activeTabTitle: this.props.children[0].props.label
        }

        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(event: any){
        this.setState({
            activeTabTitle: event.target.innerText
        });
    }

    render(){

        return (
            <div className = "tab-list">
                <ol>
                    {this.props.children.map((child: any) => {
                        var classname = "tab-list-item"
                        if(child.props.label === this.state.activeTabTitle)
                            classname = classname + " tab-list-active"
                        return (
                        <li key={child.props.label} className = {classname} onClick={this.handleClick} >{child.props.label}</li>
                        )
                    } )}
                </ol>
                <div>
                    {this.props.children.map((child: any) => {
                       if(child.props.label === this.state.activeTabTitle)
                            return child;
                        return undefined;
                    } )}
                </div>
            </div>
        )
    }

}