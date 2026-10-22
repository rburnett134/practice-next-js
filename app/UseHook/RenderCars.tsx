"use client";

import { car } from "./types";
import { use } from "react";

export default function RenderCars({carsPromise} : {carsPromise: Promise<car[]>}) {
  const cars: car[] = use(carsPromise);

  return (
    <pre>{JSON.stringify(cars, null, 2)}</pre>
  )
}