import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <Link href={"/login"}>click to login</Link>
    </main>
  );
}
