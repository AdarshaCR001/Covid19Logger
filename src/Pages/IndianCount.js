import React,{useState} from 'react'
import Count from '../count.json'

function IndianCount() {
    const [pin,setPin]=useState(0);
    const count=Count
    const [total,setTotal]=useState(0);
    const clickHandle=(evt)=>{
        evt.preventDefault();
        setTotal(count.reduce((n,x)=>n+(x==pin),0))
    //   console.log(count.filter(x=>x==pin))
    }
    return (
        <div><form onSubmit={clickHandle}>
            
            <input type="text" placeholder="Enter your Pin" onChange={e=>setPin(e.target.value)}></input>
            <input type="submit" value="submit"></input>
            <br/>
            
            <p>{total}</p>
            </form>
        </div>
    )
}
export default IndianCount
