import React,{ useState } from 'react'
function HookCounter()
{
    const [count,setState]=useState(0)
    return(
        <div>
            <button onClick={()=>setState(count+1)}>count {count}</button>
        </div>
    )
}
export default HookCounter;