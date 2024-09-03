'use client';

import { useState } from "react";

export default function Form() {
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);

    const [status, setStatus] = useState('typing'); // 'typing', 'submitting', or 'success'

    async function handleSubmit(e: any) {
      e.preventDefault();
      setStatus('submitting');
      try {
        await submitForm(answer);
        setStatus('success');
      } catch (err: any) {
        setStatus('typing');
        setError(err);
      }
    }

    function handleTextareaChange(e: any) {
      setAnswer(e.target.value);
      console.log(answer);
      
    }

    if (status === 'success') {
      return <h1>That&apos;s right!</h1>
    }
    return (
      <>
        <h2>City quiz</h2>
        <p>
          In which city is there a billboard that turns air into drinkable water?
        </p>
        <form onSubmit={handleSubmit}>
          <textarea 
          value={answer}
          disabled={status === 'submitting'}
          onChange={handleTextareaChange}  />
          <br />
          <button disabled={
          status === 'empty' ||
          status === 'submitting'
        }>
            Submit
          </button>

          {status === 'error' &&
          <p className="Error">
            Good guess but a wrong answer. Try again!
          </p>
        }
        </form>
      </>
    )
  }
  

  function submitForm(answer: any) {
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let shouldError = answer.toLowerCase() !== 'lima'
        if (shouldError) {
          reject(new Error('Good guess but a wrong answer. Try again!'));
        } else {
          resolve('');     // own change resolve();
        } 
    }, 1500);
  });
}
  