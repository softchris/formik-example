import { Formik } from 'formik';
import React from 'react';

const FormTouched = () => (
  <Formik 
    initialStatus={{ name: '', address: '' }}
    validate={values => {
      let errors = {};
      if(!values.name) {
        errors.name = 'Name is required';
      }
      if (!values.address) {
        errors.address = 'Address is required';
      }
      return errors;
    }}
    onSubmit={values => {
      console.log('submitted');
    }}
  >
  {({
    values, 
    errors,
    touched, 
    handleSubmit,
    handleChange,
    handleBlur
  }) => (
    <form onSubmit={handleSubmit}>
      <h2>Form touched example</h2>
      <div>
        <input onBlur={handleBlur} onChange={handleChange} placeholder="name" name="name" value={values.name} />
      {errors.name &&
      <div>{errors.name}</div>
      }
      </div>
      
      <div>
      <input placeholder="address" name="address" value={values.address} />
      {errors.address &&
      <div>{errors.address}</div>
      }
      </div>
      <button>Submit</button>
    </form>
  )}
  </Formik>
)

export default FormTouched;