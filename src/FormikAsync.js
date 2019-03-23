import React from 'react';
import { Formik, Form, Field } from 'formik';

function asyncValidation(values) {
  console.log('running async validation');
  return new Promise((resolve, reject) => {
    let errors = {};
    if(!values.name) {
      errors.name ="Name is required";
    }

    setTimeout(() => {
      if (Object.keys(errors).length > 0) {
        throw errors;
      }
    }, 3000);
  });
}


const FormikAsync = () => (
  <Formik 
    validateOnBlur={true} 
    validateOnChange={false}
    initialValues={{ name:'', companyName: '' }}
    onSubmit={values => {
      console.log('submitting',values);
    }}
    validate={values => {
      // TODO make this work on field level as well
      console.log('validating async');
      let errors = {};
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          errors.companyName = 'not cool';
          resolve('done');
        },3000);
      }).then(() => {
        if(Object.keys(errors).length) {
          throw errors;
        }
      });
    }}
  >
    {({ 
      handleSubmit, 
      values,
      errors 
    }) => (
      <React.Fragment>
      <h2>Formik async</h2>
      <Form onSubmit={handleSubmit}>
      <div>
        <Field name="name" type="text" placeholder="Name" />
        {errors.name && 
        <span style={{ color:"red", fontWeight: "bold" }}>{errors.name}</span>
        }
        <Field name="companyName" type="text" placeholder="Company name" />
        {
          errors.companyName &&
        <span style={{ color:"red", fontWeight: "bold" }}>{errors.companyName}</span>
        }
      </div>
      
      <div>
        <button>Submit</button>
      </div>
      </Form>
      </React.Fragment>
    )}
  </Formik>
)

export default FormikAsync;