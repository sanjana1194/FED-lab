import React,{Component} from "react";
class ChangeTextcolor extends Component{
    constructor(props){
        super(props);
        this.state={
            color:'#FF00FF',
        }
    }
    redhandle=()=>{
        this.setState({color:'#ff0000'});
    }
    greenhandle=()=>{
        this.setState({color:'#00ff00'});
    }
    bluehandle=()=>{
        this.setState({color:'#0000ff'});
    }
    render() {
        return (
             <div>
                <h1 style={{color:this.state.color}}>TEXT DEMO</h1>
                <button type="button" onClick={this.redhandle}>RED</button>&nbsp;&nbsp;
                <button type="button" onClick={this.greenhandle}>GREEN</button>&nbsp;&nbsp;
                <button type="button" onClick={this.bluehandle}>BLUE</button>&nbsp;&nbsp;
             </div>
        );
    }
}
export default ChangeTextcolor;