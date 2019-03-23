import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validate = (values) => {
  let errors = {};
  return new Promise(resolve => {
    setTimeout(() => {
      debugger;
      if (!values.email) {
        errors.email = "Email is required";
      }
      resolve(true); 
    },2000)
  }).then(() => {
    if(Object.keys(errors).length > 0) {
      throw errors.email;
    }
  });
}

const schema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required')
  });

const FormikSchema = () => (
  <Formik 
    initialValues={{ firstName: '', lastName: '', email:'' }}
    validateOnChange={false}
    validateOnBlur={true}
    validationSchema={schema}
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
      <h2>Formik schema demo</h2>
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
        <Field validate={validate} placeholder="email" type="text" name="email" />
        <ErrorMessage name="email" />
      </div>
      <button>Save</button>
    </Form>
    </React.Fragment>
  )}
  </Formik>
)

export default FormikSchema;