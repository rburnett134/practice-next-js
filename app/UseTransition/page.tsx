"use client";
import { Suspense, useState, use, useTransition } from "react";
import { fetchCars } from "../_api/carsApi";
import { car } from "../_type/carTypes";
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const CarsList = ({carsPromise}: {carsPromise: Promise<car[]>}) => {
  const cars = use(carsPromise);
  return (
    <ul>
      {cars.map((car) => (
        <li key={car.id}>
          {car.model}
        </li>
      ))}
    </ul>
  )
}

export default function UseTransition() {
  const [carsPromise, setCarsPromise] = useState<Promise<car[]>>(() => fetchCars("Ford"));
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (newValue: string) => {
    startTransition(() => {
      setCarsPromise(fetchCars(newValue));
    });
  }

  return (
      <Tabs defaultValue="Ford" onValueChange={handleTabChange}>
        <TabsList>
          <TabsTrigger value="Ford">Ford</TabsTrigger>
          <TabsTrigger value="Toyota">Toyota</TabsTrigger>
        </TabsList>
        {isPending && <p role="status">Loading cars...</p>}
        <Suspense fallback={<div>Loading...</div>}>
          <CarsList carsPromise={carsPromise} />
        </Suspense>
      </Tabs>
  )
}