import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

const FormikValidation = () => {
  return (
    <>
    <Formik initialValues={{name:"", email:"",password:"", }}>
        <Form>
            <Field name="name" type="text"/>
            <Field name="email" type="email"/>
            <Field name="password" type="password"/>
        </Form>
    </Formik>
    </>
  )
}

export default FormikValidation