import React from 'react';
import { Progress, ProgressProps } from 'semantic-ui-react';

const ProgressBar = (props: ProgressProps): JSX.Element => (
    <Progress percent={props.number} size={props.size} label={props.name} />
);

export default ProgressBar;
