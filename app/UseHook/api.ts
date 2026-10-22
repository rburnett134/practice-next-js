import { car } from "./types";

export async function fetchCars(): Promise<car[]> {
  const response = await fetch("http://localhost:3000/cars.json");

  if(!response.ok) {
    throw new Error("Failed to fetch cars");
  }

  return await response.json();
}