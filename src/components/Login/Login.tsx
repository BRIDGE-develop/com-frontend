import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { History } from 'history';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import validator from 'validator';
import axios, { AxiosError } from 'axios';
import { disableValidator } from 'util/validator';

interface LoginProps {
    history: History;
}

const Login: React.FC<LoginProps> = ({ history }) => {
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

                    alert('로그인성공 다음화면만들고 이동하기');
                    // move to next route
                    // history.push()
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
                    <Image src='/logo.png' alt='add later' /> Log-in to your account
                </Header>
                {loginError && <Message error content={loginError} />}
                <Form size='large' onSubmit={handleSubmit}>
                    <Segment stacked>
                        <Form.Input
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

export default withRouter(Login);
