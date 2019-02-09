import React from 'react';
import { isAuthenticated, decodeToken } from '../../lib/auth';
import FormInput from './FormInput';
import FormButton from './FormButton';

function NewBookForm({ handleChange, handleSubmit }) {
  return(
    <form className="column is-4 is-offset-4" onSubmit={handleSubmit}>
      <FormInput name="title" type="text" handleChange={handleChange} />
      <span>Your Author name must be <strong>{decodeToken().username}</strong></span>
      <FormInput name="author" type="text" handleChange={handleChange} />
      <FormInput className="blurb-input" name="blurb" type="text" handleChange={handleChange} />
      <label htmlFor="blurb">Don't worry, you can always add/change this later</label>
      <FormInput name="image" type="text" handleChange={handleChange} />
      <FormButton text="Create Book"/>
    </form>
  );
}

export default NewBookForm;
