import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink,Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Words from './Words'

class UserPage extends React.Component {
    constructor(props)
    {
        super(props)
    }

    render() {
        return (
            <div>
                <Words id={this.props.id}/>
            </div>
        );
    }
}

export default UserPage