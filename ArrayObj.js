import React,{Component} from "react";
export default class ArrayObj extends Component{
    constructor(props){
        super(props);
        this.state={
            studentdetails:[{sno:1,sname:"qwerty",tech:'java'},{sno:2,sname:"sanjana",tech:'Mango DB'},{sno:3,sname:"komali",tech:'Django'}]
        }
    }
    render(){
        const{studentdetails}=this.state;
        return(
            <div>
                <center>
                <table>
                    <tr>
                        <th>Student No</th>
                        <th>Student Name</th>
                        <th>Technology</th>
                    </tr>
                    {studentdetails.length>0 && studentdetails.map((student)=>{
                        return(
                            <tr key={student.sno}>
                                <td>{student.sno}</td>
                                <td>{student.sname}</td>
                                <td>{student.tech}</td> 
                            </tr>
                        )})}
                </table>
                </center>
            </div>
        )
    }
}