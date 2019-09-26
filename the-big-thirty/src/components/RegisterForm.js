import React from 'react';
import { withFormik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { Button } from '@material-ui/core';
import * as Yup from 'yup';
import axios from 'axios';



const RegisterForm = () => {
    return (
        <div>
            <Form className='formContainer'>
                <Field
                label='Username'
                name='username'
                type='text'
                variant='filled'
                margin='normal'
                required
                fullWidth
                component={TextField}
                />
                <Field
                label='Password'
                name='password'
                type='password'
                variant='filled'
                margin='normal'
                required
                fullWidth
                component={TextField}
                />
                <Field
                label='Email'
                name='email'
                type='email'
                variant='filled'
                margin='normal'
                required
                fullWidth
                component={TextField}
                />
                <Button variant="contained" color="primary" type='submit'>Signup!</Button>
            </Form>
        </div>
    )
}

const FormikRegisterForm = withFormik({
    mapPropsToValues({username, password, email}) {
        return {
            username: username || '',
            password: password || '',
            email: email || '',
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required('You need to provide a username to sign up'),
        password: Yup.string().required('You need to provide a password to sign up'),
        email: Yup.string().required('You need to provide a email address to sign up'),
    }),
    handleSubmit(values, { resetForm }) {
        axios.post('https://reqres.in/api/users', values)
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        })
        resetForm();
    }
})(RegisterForm);

export default FormikRegisterForm;
