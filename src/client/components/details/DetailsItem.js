import React from 'react';
import '../../styles/sitewide.scss';
import '../../styles/details.scss';

const DetailsItem = ({icon, header, text}) => {

    const Icon = icon;

    return(
        <div id="details-item-layout">
            <Icon className='box-icons'/>
            <h1 id='details-header'>{header}</h1>
            <p id='details-text'>{text}</p>
        </div>
    )
}

export default DetailsItem;
