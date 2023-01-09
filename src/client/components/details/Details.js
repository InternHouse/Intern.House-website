import React from 'react';
import '../../styles/sitewide.scss';
import '../../styles/details.scss';
import DetailsItem from './DetailsItem';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';

const furnishHeader = 'Fully Furnished';
const simpleHeader = 'Simple';
const friendlyHeader = 'Friendly';

const furnishText = 'Houses are ready to live in with special touches like Oculus VR headsets and backyard grills.';
const simpleText = 'Pick your start date and how many months you\’d like to stay. No forced 6 or 12 month leases.';
const friendlyText = 'Live with other interns at your company. Carpool to work, explore the city, and host house events as one intern squad.';

const Details = () => {
    return(
        <div id="details-layout">
            <div id="details-inner-layout">
                <DetailsItem
                    icon={HomeOutlinedIcon}
                    header={furnishHeader}
                    text={furnishText} 
                />
                <DetailsItem
                    icon={CheckCircleOutlinedIcon}
                    header={simpleHeader}
                    text={simpleText} 
                />
                <DetailsItem
                    icon={SentimentSatisfiedAltOutlinedIcon}
                    header={friendlyHeader}
                    text={friendlyText} 
                />
            </div>
        </div>
    )
}

export default Details;
