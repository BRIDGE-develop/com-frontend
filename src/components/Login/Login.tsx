import React, { useState } from 'react';
import axios from 'axios';
import validator from 'validator';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { disableValidator } from 'util/validator';

const Login: React.FC = () => {
    const [values, setValues] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({ emailError: '', loginError: '' });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setValues(values => ({ ...values, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        if (event) event.preventDefault();

        if (!validator.isEmail(values.email)) {
            return setErrors({
                ...errors,
                emailError: '正しいメール形式で入力してください。',
            });
        }

        const result = await axios.post('/v0/user/token', values);
        // result.status;
    };
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
                            error={errors.emailError}
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
