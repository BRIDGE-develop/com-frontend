import React from 'react';
import { Rating } from 'semantic-ui-react';

const RatingStar = props => (
    <Rating {...props} defaultRating={props.defaultRating} maxRating={props.maxRate} icon="star" />
);

export default RatingStar;
