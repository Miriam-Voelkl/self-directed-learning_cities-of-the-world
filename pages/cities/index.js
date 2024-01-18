import { cities } from "@/lib/data";

export default function Cities() {
  return (
    <>
      <h1>Here are some big cities:</h1>
      <ul>
        {cities.map((city) => (
          <li key={city.id}>{city.name}</li>
        ))}
      </ul>
    </>
  );
}
