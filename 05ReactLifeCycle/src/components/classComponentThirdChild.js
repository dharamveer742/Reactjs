import React from "react";

class classComponentThirdChild extends React.Component{
    constructor(props){
        super(props)
        console.log("constructor "+this.props.name)
    }

    componentDidMount(){
        console.log("componentDidMount "+this.props.name)
    }

    render(){
        console.log("third child render "+this.props.name)
        return (
            <h1>third child</h1>
        )
                
    }
}
export default classComponentThirdChild;