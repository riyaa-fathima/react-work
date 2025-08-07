import { useState } from "react";

function Counter(){
    const [count,setCount] = useState(0);
    
    const CountOne = () => {
        setCount(count + 1);
        console.log("count",count);
    }

    const calculation = () =>{
        console.log("calculation");
        
        let value = 0;
        for(let i =0 ; i <=1000000; i++){
            value =+ i;
        }
        return value 
    }



    
    return(
        <div>
            <h1>count = {count}</h1>
        <button onClick={CountOne} >increment</button>
        <h3 >calculation {calculation()}</h3>
        
        </div>
    )
}
export default Counter;