import React from 'react'

function Greet(props)
{

    return (
    <div>
    <h1>{props.name} a.k.a {props.hero}</h1>
    {props.children}
    </div>
    )
}
// export default Greet
//const Greet = () => <h1>Hello buss</h1>
export default Greet