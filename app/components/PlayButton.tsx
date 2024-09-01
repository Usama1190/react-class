'use client';

import Button from "./Button";

export default function PlayButton({ movieName }: any) {
    function handlePlayClick() {
      alert(`Playing ${movieName}!`);
    }
  
    return (
      <Button onClick={handlePlayClick}>
        Play &ldquo;{movieName}&ldquo;
      </Button>
    );
}