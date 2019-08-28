import React from 'react'

function NameList()
{
    function sayHello()
    {
        alert(`good bye`)
    }
    const names=['Rahul','jayesh','scientist','akil']
    const nameList=names.map( (name,index)=><h2 key={index}>{index} {name}</h2>);
    return (
    <div>{nameList}
    <button onClick={sayHello}>click me</button>
    </div>
    )
}
export default NameList;