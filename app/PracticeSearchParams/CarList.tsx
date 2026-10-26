import { fetchCars } from '../_api/carsApi'

export default async function CarList(
  { searchParams }: 
  { 
    searchParams?: Promise<{
      query?: string;
    }> 
  }) {
  const searchParamsValue = await searchParams;
  const query = searchParamsValue?.query || '';
  const cars = await fetchCars(query);

  return (
    <ul>
      {cars.map((car) => (
        <li key={car.id}>{car.make} {car.model}</li>
      ))}
    </ul>
  )
}