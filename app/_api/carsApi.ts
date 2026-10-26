import { car } from "../_type/carTypes";

export async function fetchCars(term: string): Promise<car[]> {
  const response = await fetch("http://localhost:3000/cars.json");

  if(!response.ok) {
    throw new Error("Failed to fetch cars");
  }

  let cars: car[] = await response.json();
  if(term) {
    cars = cars.filter((car) => car.make.includes(term) || car.model.includes(term))
  }

  return cars;
}