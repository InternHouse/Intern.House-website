import React, { Component } from 'react';
import '../../styles/sitewide.scss';
import '../../styles/details.scss';

class DetailsItem extends Component {
    render() {
        return(
            <div id="details-item-layout">
              {this.props.imageLink}
              <h1>{this.props.header}</h1>
              <p>{this.props.text}</p>
            </div>
        )
    }
}




export default DetailsItem;
