import React, { useState, useEffect } from 'react'
import { withFormik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { Button } from '@material-ui/core';
import * as Yup from 'yup';
import axios from 'axios';
import {axioswithAuth} from '../Utilities/axioswithAuth';

const LoginForm = ({ values }) => {
   const [username, setUsername] = useState('');
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
                    <Button variant="contained" color="primary" type='submit'>Login</Button>
            </Form>
        </div>
    )
}

const FormikLoginForm = withFormik({
    mapPropsToValues({username, password}) {
        return {
            username: username || '',
            password: password || '',
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required('You need to provide a username to login'),
        password: Yup.string().required('You need to provide a password to login')
    }),
    handleSubmit(values, { resetForm }) {
         axios({
             method: 'post',
             url: 'https://build-30-before-30.herokuapp.com/auth/login',
             data: {
                 'username': values.username,
                 'password': values.password
             }
         })
        console.log(values);
        resetForm();
    }
})(LoginForm);

export default FormikLoginForm;
