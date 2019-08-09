import { useState } from 'react';

// callback: Function
const useForm = <T>(api: Function, validator: Function) => {
    // eslint-disable-next-line @typescript-eslint/no-object-literal-type-assertion
    const [values, setValues] = useState({} as T);
    // eslint-disable-next-line @typescript-eslint/no-object-literal-type-assertion
    const [errors, setError] = useState({} as T);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setValues(values => ({ ...values, [name]: value }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        if (event) event.preventDefault();
        setError(validator(values));
        return api(values);
    };

    return {
        values,
        errors,
        handleChange,
        handleSubmit,
    };
};

export default useForm;
