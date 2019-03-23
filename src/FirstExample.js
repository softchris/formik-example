import React from 'react';
import { Formik } from 'formik';

const FirstExample = () => (
  <Formik 
    initialValues={{ name:'' }}
    onSubmit={values => {
      console.log('submitting',values);
    }}
    validate={values => {
      console.log('First Example form - running validation function')
      let errors = {};
      if(!errors.name) {
        errors.name = 'Name is required';
      }
      return errors;
    }}
  >
    {({ 
      handleSubmit, 
      handleChange,
      values,
      errors 
    }) => (
      <form onSubmit={handleSubmit}>
      <div>
        <input name="name" onChange={handleChange} value={values.name} type="text" placeholder="Name"></input>
        {errors.name && 
        <span style={{ color:"red", fontWeight: "bold" }}>{errors.name}</span>
        }
      </div>
      
      <div>
        <button>Submit</button>
      </div>
      </form>
    )}
  </Formik>
)

export default FirstExample;