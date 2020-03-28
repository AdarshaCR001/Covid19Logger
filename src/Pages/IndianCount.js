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
            <label>enter your pin</label>
            <input type="text" onChange={e=>setPin(e.target.value)}></input>
            <input type="submit" value="submit"></input>
            <br/>
            <label>number of people quarantined in your area is<t></t></label>
            {total}
            </form>
        </div>
    )
}
export default IndianCount
