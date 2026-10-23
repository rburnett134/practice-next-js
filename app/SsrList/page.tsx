import { Suspense } from "react";
import { fetchUniversities } from "../_api/universityApi";

export default function SsrList() {
  return (
    <Suspense fallback={<p>Loading universities…</p>}>
      <SsrListContent />
    </Suspense>
  );
}

async function SsrListContent() {
  const universities = await fetchUniversities("");

  return (
    <>
      <h1>Universities</h1>
      <ul>
        {universities.map((university) => (
          <li key={university.name}>{university.name}</li>
        ))}
      </ul>
    </>
  );
}