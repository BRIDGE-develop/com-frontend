import { LoginState } from 'components/Login/Login';
import validator from 'validator';

export const loginValidator = (values: LoginState) => {
    const { email } = values;

    if (!validator.isEmail(email)) return { email: '正しいメール形式で入力してください。' };
};

export const disableValidator = (...args: string[]) => args.some(value => !value);
