import React from 'react';
import { Rating, RatingProps } from 'semantic-ui-react';

const RatingStar = (props: RatingProps): JSX.Element => (
    <Rating {...props} defaultRating={props.defaultRating} maxRating={props.maxRate} icon="star" />
);

export default RatingStar;
