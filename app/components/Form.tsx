'use client';

import { useState } from "react";

export default function Form() {
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);

    const [status, setStatus] = useState('typing'); // 'typing', 'submitting', or 'success'

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
        <form>
          <textarea 
          disabled={status === 'submitting'}
          value={answer}
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
  