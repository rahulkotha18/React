import React from 'react'

function Child(props)
{
    return(
        <div>
            <button onClick={()=>props.greet('child')}>click me</button>
            
        </div>
    )
}
export default Child;