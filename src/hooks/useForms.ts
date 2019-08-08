import { useState } from 'react';

// callback: Function
const useForm = <T>() => {
    // eslint-disable-next-line @typescript-eslint/no-object-literal-type-assertion
    const [values, setValues] = useState({} as T);
    // const [error, setError] = useState({} as T);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setValues(values => ({ ...values, [name]: value }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        if (event) event.preventDefault();
        // callback();
    };

    return {
        handleChange,
        handleSubmit,
        values,
    };
};

export default useForm;
