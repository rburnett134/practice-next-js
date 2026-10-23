import { Suspense } from "react";

type SearchParams = {
  q?: string;
  page?: string;
};

export default function PracticeSearchParams({
  searchParams,
}: {
  searchParams?: Promise<SearchParams>;
}) {
  return (
    <Suspense fallback={<p className="p-8">Loading search params…</p>}>
      <PracticeSearchParamsContent searchParams={searchParams} />
    </Suspense>
  );
}

async function PracticeSearchParamsContent({
  searchParams,
}: {
  searchParams?: Promise<SearchParams>;
}) {
  const params = searchParams ? await searchParams : {};
  const query = params.q ?? "";

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Practice Search Params</h1>
      <p className="mt-4">Current query: {query || "(none)"}</p>
      <p className="mt-2 text-sm text-gray-600">
        URL example: ?q=next&page=2
      </p>
    </main>
  );
}
