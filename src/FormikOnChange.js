import React from 'react';
import { Formik } from 'formik';

const FormikOnChange = () => (
  < Formik 
    onSubmit={values => {
      console.log('submitting');
    }}
    validateOnBlur={false}
    validateOnChange={false}
    initialValues={{ name: '' }}
    validate={values => {
      console.log('Formik on change form - running validation function');
      let errors ={};
      if(!values.name) {
        errors.name = "Name is required";
      }
      return errors; 
    }}
  >
    {({
      handleChange,
      handleBlur,
      handleSubmit,
      errors,
      values
    }) => (
      <form onSubmit={handleSubmit}>
        <input onBlur={handleBlur} onChange={handleChange} name="name" value={values.name}></input>
        {errors.name &&
        <span>{errors.name}</span>
        }
        <button>Submit</button>
      </form>
    )}
  </Formik>
)

export default FormikOnChange;