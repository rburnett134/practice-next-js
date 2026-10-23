import { University } from "../_type/universityTypes";

export async function fetchUniversities(search: string): Promise<University[]> {
  try{
    const response = await fetch(`http://universities.hipolabs.com/search?country=${search}`);
    if(!response.ok) {
      throw new Error("Failed to fetch universities");
    }

    return await response.json();
  } catch(error) {
    throw error;
  }
}