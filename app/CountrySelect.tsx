export default function CountrySelect({ setQuery }: {setQuery: (query: string) => void}) {
  return (
    <select
          onChange={(e) => setQuery(e.target.value)}
          className="border border-gray-300 rounded-md p-2 mb-4 w-full"
        >
          <option value="">All Countries</option>
          <option value="United States">United States</option>
          <option value="Canada">Canada</option>
          <option value="United Kingdom">United Kingdom</option>
        </select>
  )
}