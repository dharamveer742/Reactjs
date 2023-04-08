import React from "react";
class profile extends React.Component{
    constructor(props){
        super()
        // create state
        this.state = {
            count:0,
            count2:0
        }
        console.log("constructor")
    }
    componentDidMount(){
        // best place for api call
        console.log("componentDidMount")
    }
    render(){
        console.log("render")
        return (
            <div>
            <h1>profile Class component </h1>
            <h2>Componnet Type :{this.props.type}</h2>
            <h2>Count : {this.state.count}</h2>
            <button onClick={()=>{
                // we do not mutate state directly
                this.setState({
                    count:1
                    
                })
                console.log(this.state.count)
            }}>setCount</button>
            </div>
           
        )
        
    }
}
export default profile;