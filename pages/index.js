import StyledLink from "./cities/components/StyledLink";

export default function HomePage() {
  return (
    <>
      <h1>Welcome to this website with dynamic routing to some cities! 🌃</h1>
      <StyledLink href="/cities">Travel to the cities 🛫</StyledLink>
    </>
  );
}
