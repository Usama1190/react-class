/*
"use client";

export default function Button() {

    function handleClick() {
        alert('The button was clicked!')
    }


    return (
      <>
        <button>I don&apos;t do anything</button>
        <br />
        <button onClick={handleClick}>I do something</button>
      </>
    );
}
*/



'use client';

export default function Button({ onClick, children }: any) {
    return (
      <button onClick={onClick}>
        {children}
      </button>
    );
}