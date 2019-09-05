import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Login from './Login';

describe('Login', () => {
    it('changes input values and button gets enabled when input something to all input field', () => {
        const { getByPlaceholderText, getByTestId } = render(<Login />);

        const emailInput = getByPlaceholderText('E-mail address') as HTMLInputElement;
        const passwordInput = getByPlaceholderText('Password') as HTMLInputElement;
        const loginButton = getByTestId('loginButton');

        fireEvent.change(emailInput, { target: { value: 'email' } });
        fireEvent.change(passwordInput, { target: { value: 'password' } });

        expect(emailInput.value).toBe('email');
        expect(passwordInput.value).toBe('password');
        expect(loginButton.hasAttribute('disabled')).toBe(false);
    });

    it('button is disabled without input value', () => {
        const { getByTestId } = render(<Login />);

        const loginButton = getByTestId('loginButton');

        expect(loginButton.hasAttribute('disabled')).toBe(true);
    });

    it('shows email error when email value is invalid', () => {
        const { getByPlaceholderText, getByTestId, getByText } = render(<Login />);

        const emailInput = getByPlaceholderText('E-mail address') as HTMLInputElement;
        const passwordInput = getByPlaceholderText('Password') as HTMLInputElement;
        const loginButton = getByTestId('loginButton');

        fireEvent.change(emailInput, { target: { value: 'email' } });
        fireEvent.change(passwordInput, { target: { value: 'password' } });
        fireEvent.click(loginButton);

        expect(getByText('正しいメール形式で入力してください。')).toBeInTheDocument();
    });

    it('shows error message when requesting with invalid values', async () => {
        const mock = new MockAdapter(axios);

        mock.onPost('/v0/user/token').reply(404);

        const { getByPlaceholderText, getByTestId, getByText } = render(<Login />);

        const emailInput = getByPlaceholderText('E-mail address') as HTMLInputElement;
        const passwordInput = getByPlaceholderText('Password') as HTMLInputElement;
        const loginButton = getByTestId('loginButton');

        fireEvent.change(emailInput, { target: { value: 'email@email.net' } });
        fireEvent.change(passwordInput, { target: { value: 'password' } });
        fireEvent.click(loginButton);

        await wait(() => expect(getByText('入力したメールは存在しません。')).toBeInTheDocument());

        mock.reset();
        mock.onPost('/v0/user/token').reply(401);

        fireEvent.click(loginButton);

        await wait(() => expect(getByText('パスワードが間違っています。')).toBeInTheDocument());

        mock.reset();
        mock.onPost('/v0/user/token').reply(500);

        fireEvent.click(loginButton);

        await wait(() =>
            expect(
                getByText('サーバーエラーが発生しました。管理者にお問い合わせしてください。')
            ).toBeInTheDocument()
        );
    });

    it('saves response data when login is successful', async () => {
        const mock = new MockAdapter(axios);

        const data = { email: 'dummy@email.com', admin: 1, expiredAt: 'dummyTime' };
        mock.onPost('/v0/user/token').reply(200, data);

        const { getByPlaceholderText, getByTestId } = render(<Login />);

        const emailInput = getByPlaceholderText('E-mail address') as HTMLInputElement;
        const passwordInput = getByPlaceholderText('Password') as HTMLInputElement;
        const loginButton = getByTestId('loginButton');

        fireEvent.change(emailInput, { target: { value: 'email@email.net' } });
        fireEvent.change(passwordInput, { target: { value: 'password' } });
        fireEvent.click(loginButton);

        await wait(() => {
            const session = sessionStorage.getItem('isSignedIn');
            expect(session).toEqual(JSON.stringify(data));
        });
    });
});
