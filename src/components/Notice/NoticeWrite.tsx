import React from 'react';
import { Container, Divider, Input, Form, Button } from 'semantic-ui-react';
import { TitleDiv } from '../../app/component/title';

const NoticeWrite: React.FC = (): JSX.Element => (
    <Container style={{ minHeight: '89.5vh' }}>
        <TitleDiv name="お知らせ作成" />
        <Input size="huge" placeholder="Title" label="Title" fluid style={{ marginTop: 14 }} />
        <Container textAlign="justified">
            <Divider />
            <Form reply>
                <Form.TextArea style={{ minHeight: 300 }} />
                <Button content="作成" labelPosition="left" icon="edit" color="teal" />
            </Form>
        </Container>
    </Container>
);

export default NoticeWrite;
