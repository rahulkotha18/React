import React from 'react';
import axios from 'axios'
class Words extends React.Component {
    constructor(props)
    {
        super(props)
        this.state={
            x:[]
        }
    }
    componentDidMount()
    {
        axios.get("http://localhost:8080/users")
        .then(response=>
            {
                
                this.setState({x:response.data})
                
            })
        // fetch(this.url)
        // .then(response=>{ return response.json()})
        // .then(data=>{this.setState({x:data})})
    }
    render() {
        var content=null
        if(this.state.x.length===323){
            content=(
            <div>
            <div className="spinner-grow text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-secondary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-success" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-danger" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-warning" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-info" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-light" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-dark" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          </div>
          )
        }
        return (
            <div>
                {content}
                <ul class="list-group">
                {this.state.x.map(data=>{
                    return (
                        <div>
                    <li class="list-group-item list-group-item-success" align="left">{data.word}</li>
                    <li class="list-group-item list-group-item-success" align="justified">{data.meaning}</li>
                    <li class="list-group-item list-group-item-light"></li>
                    </div>
                    );

                })}
                </ul>
            </div>
        );
    }
}

export default Words;