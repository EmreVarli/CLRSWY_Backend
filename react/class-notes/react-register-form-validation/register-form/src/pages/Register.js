import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
    TextField,
    Grid,
    Container,
    Avatar,
    Typography,
    Link,
    Box,
    
  } from '@material-ui/core';
 
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import * as Yup from 'yup';
import { Formik } from 'formik';

const stylesFunc = makeStyles((theme) => ({
    wrapper: {
      marginTop: '3rem',
      height: 'calc(100vh - 19.0625rem)',
      textAlign: 'center',
      marginBottom: '12rem',
      width:'30rem'
    },
    avatar: {
      margin: '1rem auto',
      backgroundColor: theme.palette.secondary.main,
    },
    signUp: {
      margin: '1rem',
    },
    login: {
      textDecoration: 'none',
      fontWeight: '600',
      paddingLeft: '0.5rem',
    },
    googleImg: {
      width: 75,
      marginLeft: 10,
    },
  }));

  const signUpValidationSchema = Yup.object().shape({
    username: Yup.string()
      .required('Display Name is required!!')
      .min(2, 'Too short')
      .max(15, 'Must be 15 char or less'),
    email: Yup.string().email('Invalid Email').required('Email is required!!'),
    password: Yup.string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/\d+/, 'Password must have a number')
      .matches(/[a-z]+/, 'Password must have a lowercase')
      .matches(/[A-Z]+/, 'Password must have a uppercase')
      .matches(/[!?.@#$%^&*()-+]+/, 'Password must have a special char'),
    password2: Yup.string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });


  const initialValues = {
    username: '',
    email: '',
    password: '',
    password2: '',
  };
  const handleSubmit = (values) => {
    alert(`
    username: ${values.username},
    email: ${values.email},
    password: ${values.password},
    password2: ${values.password2},
  `);
    console.log(values);
  };

 function Register() {
    const signupStyles = stylesFunc();

  return (
    <Container className={signupStyles.wrapper}>
      <Avatar className={signupStyles.avatar}>
        <LockOutlinedIcon />
      </Avatar>
    <Typography  className={signupStyles.signUp} variant="h4">
        Sign Up
    </Typography>

<Formik
 initialValues={initialValues}
 validationSchema={signUpValidationSchema}
 onSubmit={handleSubmit}
>
{({ 
          handleSubmit,
          handleChange,
          values,
          errors,
          touched,
          handleBlur,
        }) =>(

    <form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  name="username"
                  label="User Name"
                  variant="outlined"
                  fullWidth
                  onBlur={handleBlur}
                  value={values.username}
                  onChange={handleChange}
                  error={touched.username && Boolean(errors.username)}
                  helperText={touched.username && errors.username}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  onBlur={handleBlur}
                  value={values.email}
                  onChange={handleChange}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="password"
                  label="Password"
                  variant="outlined"
                  type="password"
                  fullWidth
                  onBlur={handleBlur}
                  value={values.password}
                  onChange={handleChange}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="password2"
                  label="Password Again"
                  variant="outlined"
                  type="password"
                  fullWidth
                  onBlur={handleBlur}
                  value={values.password2}
                  onChange={handleChange}
                  error={touched.password2 && Boolean(errors.password2)}
                  helperText={touched.password2 && errors.password2}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Register
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
</Formik>
       

    </Container>
  );
}

export default Register;