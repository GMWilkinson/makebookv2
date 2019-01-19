import React from 'react';

import FormInput from './FormInput';
import FormTextarea from './FormTextarea';
import FormButton from './FormButton';

function NewPageForm({ handleChange, handleSubmit }) {
  return(
    <form onSubmit={handleSubmit}>
      <FormInput name="pageName" handleChange={handleChange} />
      <FormTextarea name="text" handleChange={handleChange} />
      <FormButton text="Create"/>
    </form>
  );
}

export default NewPageForm;
