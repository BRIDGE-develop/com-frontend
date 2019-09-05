import React from 'react';
import { Button, Checkbox, Form, Container, Header, Input } from 'semantic-ui-react';
import { TitleDiv } from '../../app/component/title';

const UserAdd: React.FC = (): JSX.Element => (
    <Container style={{ minHeight: '89.2vh' }}>
        <TitleDiv name="User Add" />
        <Form style={{ marginTop: '14px' }}>
            <Form.Group widths="equal">
                <Form.Input fluid label="ID" placeholder="ID" />
                <Form.Input fluid label="名前" placeholder="名前" />
            </Form.Group>
            <Button type="submit">Submit</Button>
        </Form>
    </Container>
);

export default UserAdd;
