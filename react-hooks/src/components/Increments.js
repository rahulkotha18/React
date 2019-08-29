import React,{ useState } from 'react'
function Increments()
{
    const initialCount=0
    const [count,setCount]=useState(initialCount)
    const countbyfive=()=>
    {
        for(let i=0;i<5;i++)
        {
            setCount(prevCount => prevCount+1)
        }
    }
    return(
        <div>
            count: {count}
            <button onClick={()=>setCount(prevCount => prevCount+1)}>add</button>
            <button onClick={()=>setCount(prevCount => prevCount-1)}>delete</button>
            <button onClick={()=>setCount(initialCount)}>reset</button>
            <button onClick={()=>countbyfive()}>add by 5</button>
        </div>
    )
}
export default Increments;