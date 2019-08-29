import React,{ useState } from 'react'
function ObjectHook()
{
    const [emp,setEmp]=useState({firstName:"",lastName:""})
    const changeHandler=(e)=>
    {
        setEmp(
            {
                
            }
        )
    }

    // changeHandler=(e)=>{
    //     this.setState(
    //         {[e.target.name]:e.target.value}
    //     )
    // }

    return(
        <div>
            firstName:<input type="text" value={emp.firstName} onChange={e=>setEmp({firstName:e.target.value})}/>
            <br/>
            lastName: <input type="text" value={emp.lastName} onChange={e=>setEmp({lastName:e.target.value})}/>
            <br/>
            thanks for being a partner {emp.firstName} and {emp.lastName}
        </div>
    )
}
export default ObjectHook;