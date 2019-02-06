import React from 'react';

import FormInput from './FormInput';
import FormTextarea from './FormTextarea';
import FormButton from './FormButton';

function NewPageForm({ handleChange, handleSubmit }) {
  return(
    <form className="column is-8 is-offset-2" onSubmit={handleSubmit}>
      <FormInput className="" name="pageName" handleChange={handleChange} />
      <div className="">
        <label className="label is-size-5" htmlFor="text">Text</label>
        <textarea className="textarea new-page-textarea" rows="20" name="text" onChange={handleChange}></textarea>
      </div>
      <div className="button-box has-text-centered">
        <FormButton text="Create"/>
      </div>
    </form>
  );
}

export default NewPageForm;
