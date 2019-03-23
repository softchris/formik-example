import React from 'react';
import { Formik, Form, Field } from 'formik';

const FormikBuiltin = () => (
  <Formik 
    initialValues={{ firstName: '', lastName: '', email:'' }}
    validate={values => {
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
    handleSubmit, 
    errors,
    touched
  })=> (
    <React.Fragment>
      <h2>Formik builtin demo</h2>
    <Form onSubmit={handleSubmit}>
      <div>
        <Field placeholder="first name" name="firstName" />
        {errors.firstName && touched.firstName && 
        <div style={{ color: 'red', fontWeight: 'bold' }}>{errors.firstName}</div>
        }
      </div>
      <div>
        <Field placeholder="last name" type="text" name="lastName" />
        {errors.lastName && touched.lastName &&
        <div style={{ color: 'red', fontWeight: 'bold' }}>{errors.lastName}</div>
        }
      </div>
      <div>
        <Field placeholder="email" type="text" name="email" />
        {errors.email && touched.email &&
        <div style={{ color: 'red', fontWeight: 'bold' }}>{errors.email}</div>
        }
      </div>
      <button>Save</button>
    </Form>
    </React.Fragment>
  )}
  </Formik>
)

export default FormikBuiltin;