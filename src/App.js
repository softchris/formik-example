import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormikExample from './FormikExample';
import FirstExample from './FirstExample';
import FormikOnChange from './FormikOnChange';
import FormTouched from './FormikTouched';

import FormBuiltin from './FormikBuiltin';

import FormikSchema from './FormikSchema';
import FormikAsync from './FormikAsync';

import FormikError from './FormikError';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FormikError />
        <FormikAsync />
        <FormBuiltin />
        <FormikSchema />
        <FormikOnChange />
        <FirstExample />
        <FormikExample />
        <FormTouched />
      </div>
    );
  }
}

export default App;
