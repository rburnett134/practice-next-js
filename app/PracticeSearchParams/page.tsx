import Search from "../_components/Search";
import { Suspense } from 'react';
import CarList from "./CarList";

export default async function PracticeSearchParams(
  { searchParams }: 
  { 
    searchParams?: Promise<{
      query?: string;
    }> 
  }) {
  return(
    <>
      <Suspense fallback={<div>Loading Search Bar...</div>}>
        <Search />
      </Suspense>
      <h1>Cars:</h1>
      <Suspense fallback={<div>Loading List...</div>}>
        <CarList searchParams={searchParams}/>
      </Suspense>
    </>
  );
}