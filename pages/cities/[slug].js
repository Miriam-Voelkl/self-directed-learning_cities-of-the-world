import { useRouter } from "next/router";
import { cities } from "@/lib/data";

export default function City() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) {
    return;
  }
  const currentCity = cities.find((city) => city.slug === slug);
  const { name, description } = currentCity;

  return (
    <>
      <h1>{name} 🌇</h1>
      <p>{description}</p>
    </>
  );
}
