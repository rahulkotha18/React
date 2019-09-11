import React from 'react';
import axios from 'axios'
import {Spinner,Navbar,NavbarBrand} from 'reactstrap'
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
        axios.get("http://localhost:8080/words")
        .then(response=>
            {
                
                this.setState({x:response.data})
                
            })
        // fetch(this.url)
        // .then(response=>{ return response.json()})
        // .then(data=>{this.setState({x:data})})
    }
    render() {
    
        return (
            <div>
                <div>
      <Navbar color="grey" dark expand="md">
          <NavbarBrand text-color="white">
          <Spinner type="grow" color="primary" />
          <Spinner type="grow" color="secondary" />
          <Spinner type="grow" color="success" />
          <Spinner type="grow" color="danger" />
          <Spinner type="grow" color="warning" />
          <Spinner type="grow" color="info" />
          <Spinner type="grow" color="dark" />
          </NavbarBrand>
      </Navbar>
      </div>
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