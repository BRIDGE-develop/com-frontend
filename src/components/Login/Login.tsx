import React from 'react';
import axios from 'axios';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

import useForm from 'hooks/useForms';
import { disableValidator, loginValidator } from 'utils/validator';

export interface LoginState {
    email: string;
    password: string;
}

const api = (values: LoginState) => {
    axios.post(`/user/login`, values);
};

const Login: React.FC = () => {
    const { values, errors, handleChange, handleSubmit } = useForm<LoginState>(api, loginValidator);

    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    <Image src='/logo.png' alt='add later' /> Log-in to your account
                </Header>
                <Form size='large' onSubmit={handleSubmit}>
                    <Segment stacked>
                        <Form.Input
                            fluid
                            icon='user'
                            iconPosition='left'
                            placeholder='E-mail address'
                            // type='email'
                            autoComplete='new-email'
                            name='email'
                            onChange={handleChange}
                            value={values.email || ''}
                            error={errors.email}
                        />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                            autoComplete='new-password'
                            name='password'
                            onChange={handleChange}
                            value={values.password || ''}
                        />

                        <Button
                            color='teal'
                            fluid
                            size='large'
                            type='submit'
                            disabled={disableValidator(values.email, values.password)}
                        >
                            Login
                        </Button>
                    </Segment>
                </Form>
                <Message>
                    New to us? <a href='/'>Sign Up</a>
                </Message>
            </Grid.Column>
        </Grid>
    );
};

export default Login;
