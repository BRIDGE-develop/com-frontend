import React from 'react';
import { Progress } from 'semantic-ui-react';

const ProgressBar = props => (
    <Progress percent={props.number} size={props.size} label={props.name} />
);

export default ProgressBar;
