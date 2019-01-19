import React from 'react';

import FormInput from './FormInput';
import FormButton from './FormButton';

function PageForm({ handleChange, handleSubmit }) {
  return(
    <form onSubmit={handleSubmit}>
      <FormInput name="title" type="text" handleChange={handleChange} />
      <FormInput name="author" type="text" handleChange={handleChange} />
      <FormInput name="image" type="text" handleChange={handleChange} />
      <FormButton text="Create Book"/>
    </form>
  );
}

export default PageForm;
