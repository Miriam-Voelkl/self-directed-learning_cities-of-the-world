import { cities } from "@/lib/data";
import Link from "next/link";

export default function Cities() {
  return (
    <>
      <h1>Here are some big cities:</h1>
      <ul>
        {cities.map(({ id, name, slug }) => (
          <li key={id}>
            <Link href={`/cities/${slug}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
