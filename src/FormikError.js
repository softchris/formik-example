import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const FormikBuiltinWithError = () => (
  <Formik 
    initialValues={{ firstName: '', lastName: '', email:'' }}
    validate={values => {
      console.log('Formik error - validation')
      let errors = {};
      if(!values.firstName) {
        errors.firstName = 'First name is required';
      }
      if (!values.lastName) {
        errors.lastName = 'Last name is required';
      }
      if (!values.email) {
        errors.email = 'Email is required';
      }
      return errors; 
    }}

    onSubmit={values => {
      console.log('submitting');
    }}
  >
  {({ 
    handleSubmit
  })=> (
    <React.Fragment>
      <h2>Formik builtin with error component</h2>
    <Form onSubmit={handleSubmit}>
      <div>
        <Field placeholder="first name" name="firstName" />
        <ErrorMessage name="firstName" />
      </div>
      <div>
        <Field placeholder="last name" type="text" name="lastName" />
        < ErrorMessage name = "lastName" / >
      </div>
      <div>
        <Field placeholder="email" type="text" name="email" />
        <ErrorMessage name="email" />
      </div>
      <button>Save</button>
    </Form>
    </React.Fragment>
  )}
  </Formik>
)

export default FormikBuiltinWithError;