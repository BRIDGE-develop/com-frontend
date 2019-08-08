import { LoginState } from 'components/Login/Login';
import validator from 'validator';

export const loginValidator = (
    values: LoginState,
    setError: React.Dispatch<React.SetStateAction<string>>
) => {
    const { email, password } = values;

    if (!email.length) return setError('メールを入力してください。');
    if (!validator.isEmail(email)) return setError('正しいメール形式で入力してください。');
    if (!password.length) return setError('パスワードを入力してください。');
};
