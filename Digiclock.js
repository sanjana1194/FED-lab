import React,{useEffect,useState} from "react";
function Digiclock(){
    const[myTime,setTime]=useState(" ");
    const Tick= () =>{
        let d=new Date();
        let hours=d.getHours();
        let minutes=d.getMinutes();
        let seconds=d.getSeconds();
        let time=`${hours>12?hours-12:hours}:${minutes}:${seconds}`
        if(hours<12){
            time=time+"AM"
        }
        else{
            time=time+"PM"
        }
        setTime(time);
    }
    useEffect(() =>{
        const t=setInterval(Tick,1000);
        return ()=>{
            clearTimeout(t);
        }
    },[myTime])
    return(
        <div>
            <h1>Digital Clock</h1>
            <h2>{myTime}</h2>
        </div>
    )
}
export default Digiclock;