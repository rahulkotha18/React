import React, { PureComponent } from 'react';

class PurComponent extends PureComponent {
    render() {
        console.log('*********8pure component ***********88');
        return (
            <div>
                PurComponent {this.props.name}
            </div>
        );
    }
}

export default PurComponent;