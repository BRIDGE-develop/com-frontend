import { disableValidator } from './validator';

describe('validator', () => {
    it('return false if all arguments have no value.', () => {
        const arg1 = 'email';
        const arg2 = 'password';

        const result = disableValidator(arg1, arg2);
        expect(result).toBe(false);
    });

    it('returns true if at least one argument has no value.', () => {
        const arg1 = 'email';
        const arg2 = 'password';
        const arg3 = '';
        const arg4 = 'name';

        const result = disableValidator(arg1, arg2, arg3, arg4);
        expect(result).toBe(true);
    });
});
