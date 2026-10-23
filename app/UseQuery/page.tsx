"use client";
import { useState } from "react";
import { fetchUniversities } from "./universityApi";
import { useQuery } from "@tanstack/react-query";
import { University } from "./types";
import CountrySelect from "./_components/CountrySelect";

export default function Home() {
  const [query, setQuery] = useState("");
  console.log("rendered!");
  const { data: universities = [] } = useQuery({
    queryKey: ["universityKey", query],
    queryFn: () => fetchUniversities(query),
    staleTime: 1000 * 60 * 5
  });
  return (
    <>
        <CountrySelect setQuery={setQuery} />
        <ul>
          {universities.map((university: University) => (
            <li key={university.name}>{university.name}</li>
          ))}
        </ul>
    </>     
  );
}
