"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Select Test Section:</h1>
        <Link href="/practice-forms">Practice Forms</Link>
        <Link href="/practice-search-params">Practice Search Params</Link>
        <Link href="/SsrList">SSR List</Link>
        <Link href="/UseHooks">Use Hooks</Link>
        <Link href="/UseQuery">Use Query</Link>
      </main>
    </div>
  );
}
