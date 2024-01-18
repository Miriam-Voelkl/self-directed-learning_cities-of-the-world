import { cities } from "@/lib/data";

export default function Cities() {
  return (
    <ul>
      {cities.map((city) => (
        <li key={city.id}>{city.name}</li>
      ))}
    </ul>
  );
}
