import { fetchUniversities } from "../universityApi";

export default async function SsrList() {
  const universities = await fetchUniversities("");
  return (
    <>
      <h1>Universities</h1>
      <ul>
        {universities.map((university) => (
          <li key={university.name}>
            {university.name}
          </li>
        ))}
      </ul>
    </>
  )
}