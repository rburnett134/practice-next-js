"use client";
import {useEffect} from "react";

export default function ErrorPage({error, reset}: {error: Error, reset: () => void}) {
  useEffect(() => {
    console.log("Error: ", error);
  }, [error])
  return (
    <>
      <h1>Error:</h1>
      <button onClick={() => reset()}>Retry?</button>
    </>
  )
}