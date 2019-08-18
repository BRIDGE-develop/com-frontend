import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import validator from 'validator';
import { disableValidator } from 'util/validator';

const Login: React.FC = () => {
    const [values, setValues] = useState({ email: '', password: '' });
    const [emailError, setEmailError] = useState();
    const [loginError, setloginError] = useState();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setValues(values => ({ ...values, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        if (event) event.preventDefault();

        if (!validator.isEmail(values.email)) {
            return setEmailError('正しいメール形式で入力してください。');
        } else {
            setEmailError(false);
            axios
                .post('/v0/user/token', values)
                .then(response => {
                    sessionStorage.setItem('isSignedIn', JSON.stringify(response.data));

                    // TODO: move to next route ex. history.push('nextPage')
                })
                .catch((err: AxiosError) => {
                    switch (err.response && err.response.status) {
                        case 404:
                            return setloginError('入力したメールは存在しません。');
                        case 401:
                            return setloginError('パスワードが間違っています。');
                        default:
                            setloginError(
                                'サーバーエラーが発生しました。管理者にお問い合わせしてください。'
                            );
                    }
                });
        }
    };
    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    <Image src='' alt='add later' /> Log-in to your account
                </Header>
                {loginError && <Message data-testid='message' error content={loginError} />}
                <Form size='large' onSubmit={handleSubmit}>
                    <Segment stacked>
                        <Form.Input
                            data-testid='email'
                            fluid
                            icon='user'
                            iconPosition='left'
                            placeholder='E-mail address'
                            autoComplete='new-email'
                            name='email'
                            onChange={handleChange}
                            value={values.email}
                            error={emailError}
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
                            value={values.password}
                        />
                        <Button
                            data-testid='loginButton'
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
            </Grid.Column>
        </Grid>
    );
};

export default Login;
