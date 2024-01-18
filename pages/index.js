import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h1>🌆 Welcome to this website with some cities! 🌃</h1>
      <Link href="/cities">Travel to the cities 🚂</Link>
    </>
  );
}
