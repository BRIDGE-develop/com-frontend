import React from 'react';
import { Container, Segment } from 'semantic-ui-react';

const ReactStyledFooter = {
    Segment: {
        padding: '1em 0em',
        marginTop: '1em',
        background: '#2F414F',
    },
};

const FooterBar = () => {
    return (
        <Segment inverted vertical style={ReactStyledFooter.Segment}>
            <Container>
                <p>© 2019. BRIDGE Co. all rights reserved.</p>
            </Container>
        </Segment>
    );
};

export default FooterBar;
