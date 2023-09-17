"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center text-white">
      <Link
        href={"/login"}
        className="border border-blue-400 rounded-md p-2 hover:text-gray-400 hover:bg-gray-950 transition-colors duration-300"
      >
        Click to login
      </Link>
    </main>
  );
}
