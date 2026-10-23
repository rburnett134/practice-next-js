import { Suspense } from "react";
import RenderCars from "./RenderCars";
import { fetchCars } from "../_api/carsApi";

export default function CarsList() {
  // const [cars, setCars] = useState<car[]>([]);

  // useEffect(() => {
  //   // fetch("./cars.json").then((response) => {
  //   //   return response.json();
  //   // }).then((data) => {
  //   //   setCars(data);
  //   // })

  //   const getCars = async () => {
  //     const cars = await fetch("./cars.json");
  //     setCars(await cars.json());
  //   }
  //   getCars();
  // }, []);

  const carsPromise = fetchCars();

  return(
    <Suspense fallback={<div>loading...</div>}>
      <RenderCars carsPromise={carsPromise}/>
    </Suspense>
  )
  
}