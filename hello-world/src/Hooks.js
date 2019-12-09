import React,{useState,useEffect} from 'react';
function Hooks()
{
    let [name,setName]=useState("");
    let [index,setIndex]=useState(1);
    useEffect(
        ()=>{
            console.log('');
            setName("Rahul")
            setIndex(101)
        },[]
    )
    useEffect(
        ()=>{
            console.log('index set')
        },[index]
    )
    const display=()=>
    {
        return(
            <div>
                <h2>{`name :${name}`}</h2>
                <h3>{`index :${index}`}</h3>
            </div>
        )
    }
    return(
        <div>
    {display()}
    <button onClick={()=>setIndex(index+1)}>click</button>
    </div>
    );
}
export default Hooks;