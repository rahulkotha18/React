import React, { Component } from 'react'

class Message extends Component
{
    constructor()
    {
        super()
        this.state={
            //mes:"visitor",
            message:"Welcome Visitor"
        }
        //this.changeText=this.changeText.bind(this)
        //this.changeMessage=this.changeText.bind(this)
    }
    changeMessage()
    {
        this.setState(
            {
                message:"Thank you for subscribing   "+this.state.message.substring(8)
            }
        )
    }
    changeText(event)
    {
        this.setState(
            {
                message:"Welcome "+event.target.value
            }
        )
    }
    render()
    {
        return(
            <div>
                <h1>{this.state.message}</h1>
                {<h1>{this.state.mes}</h1>}
                <button onClick={()=>this.changeMessage()}>Subscribe</button>
                <input type="text" value={this.state.mes} onChange={(event)=>this.changeText(event)}/>
            </div>
        )
    }
}
export default Message