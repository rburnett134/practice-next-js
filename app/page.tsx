"use client";
import { useState } from "react";
import { fetchUniversities } from "./universityApi";
import { useQuery } from "@tanstack/react-query";
import { University } from "./types";
import CountrySelect from "./CountrySelect";

export default function Home() {
  const [query, setQuery] = useState("");
  console.log("rendered!");
  const { data: universities = [] } = useQuery({
    queryKey: ["universityKey", query],
    queryFn: () => fetchUniversities(query),
    staleTime: 1000 * 60 * 5
  });
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <CountrySelect setQuery={setQuery} />
        <ul>
          {universities.map((university: University) => (
            <li key={university.name}>{university.name}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}
