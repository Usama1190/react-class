"use client";

export default function AlertButton({message, children}: any) {

    function handleClick() {
        alert(message);
    }


    return (
      <>
        <button onClick={handleClick}>{children}</button>
      </>
    );
}