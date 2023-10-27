import React,{useState} from 'react'
function BMIcalc(){
    const [height,setHeight]= useState('');
    const [weight, setWeight] = useState('') ;
    const [name,setname]=useState("");
    const calculatedemo=()=>{
        var heightSquare=(height/100*height/100);
        var bmi= weight / heightSquare;
        if(bmi<16){
            window.alert("hi..."+name+"u r underweight");
        }
        else if(bmi>16 && bmi<17){
            window.alert("hi...."+name+"u r moderetly underweight");
        }
        else if(bmi>17 && bmi<18.5){
            window.alert("hi..."+name+" u are normal");
        }
        else if(bmi>18.5 && bmi<24.99){
            window.alert("hi.."+name+" u r overweight");
        }
        else if(bmi>=25 && bmi<=29.99){
            window.alert("hi..."+name+" u r obese");
        }
        else{
            window.alert("hi..."+name+"u r underweight");
        }
        bmi=Math.round(bmi*100)/100
    }
    const submitME=(e)=>{
        e.preventDefault();
        calculatedemo();
    }
    const handleName=(e)=>{
        setname(e.target.value);
    }
    const handleHeight=(e)=>{
        setHeight(Number(e.target.value));
    }
    const handleWeight=(e)=>{
        setWeight(e.target.value);
    }
    return (
        <div>
            <form onSubmit={submitME}>
                Name:<input type="text" value={name}  onChange={handleName}/><br/>
                Height in cm :<input type="number" value={height}  onChange={handleHeight} /><br/>
                Weight in kg :<input type="number" value={weight}  onChange={handleWeight} /><br/>
                <button type='submit'>Calculate</button>
            </form>
        </div>
    );

}
export default BMIcalc;