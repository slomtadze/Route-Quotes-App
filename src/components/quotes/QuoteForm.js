import React, { useRef } from 'react';
import { useState } from 'react';
import { Fragment } from 'react';
import { Prompt } from 'react-router-dom';

import Card from './../UI/Card';
import LoadingSpinner from './../UI/LoadingSpinner'


import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {

  const [isEntering, setIsEntering] = useState(false)

  const authorInputRef = useRef();
  const textInputRef = useRef();

  const focusFormHandler = () => {
    setIsEntering(true)
  }

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const btnClickHandler = () => {
    setIsEntering(false)
  }

  return (
    <Fragment>
      <Prompt 
        when={isEntering} 
        message='Are you sure you want to leave?'
      />
      <Card>
        <form className={classes.form} onFocus={focusFormHandler} onSubmit={submitFormHandler}>
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor='author'>Author</label>
            <input type='text' id='author' ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='text'>Text</label>
            <textarea id='text' rows='5' ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={btnClickHandler} className='btn'>Add Quote</button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
