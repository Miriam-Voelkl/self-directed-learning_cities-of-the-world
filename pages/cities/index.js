import { cities } from "@/lib/data";
import styled from "styled-components";
import StyledLink from "./components/StyledLink";

const StyledList = styled.ul`
  list-style: "🏙️";
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export default function Cities() {
  return (
    <>
      <h1>Here are some big cities:</h1>
      <StyledList>
        {cities.map(({ id, name, slug }) => (
          <li key={id}>
            <StyledLink href={`/cities/${slug}`} $isACity>
              {name}
            </StyledLink>
          </li>
        ))}
      </StyledList>
      <StyledLink href="/">Get me back home 🏠</StyledLink>
    </>
  );
}
