import { useRouter } from "next/router";
import { cities } from "@/lib/data";
import StyledLink from "./components/StyledLink";

export default function City() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) {
    return;
  }

  const currentCity = cities.find((city) => city.slug === slug);
  const { name, description, country, population } = currentCity;

  return (
    <>
      <h1>
        {name}, {country} 🌇
      </h1>
      <p>Population: {population} </p>
      <p>{description}</p>
      <StyledLink href="/cities">🚂 Travel back to all cities</StyledLink>
    </>
  );
}
