import React,{ useState } from 'react'
function ObjectHook()
{
    const [emp,setEmp]=useState({firstName:"",lastName:""})
    const changeHandler=(e)=>
    {
        setEmp(
            {
                ...emp,
                [e.target.name]:e.target.value
            }
        )
    }
    return(
        <div>
            First-Name:<input type="text" name="firstName" value={emp.firstName} onChange={changeHandler}/>
            <br/>
            Last-Name: <input type="text" name="lastName" value={emp.lastName} onChange={changeHandler}/>
                                                                                {/* onChange={e=>setEmp({...emp,lastName:e.target.value})}/> */}
            <br/>
            thanks for being a partner {emp.firstName} and {emp.lastName}
        </div>
    )
}
export default ObjectHook;