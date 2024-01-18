import { cities } from "@/lib/data";
import Link from "next/link";
import styled, { css } from "styled-components";

const StyledList = styled.ul`
  list-style: "🏙️";
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  ${({ $isACity }) =>
    $isACity &&
    css`
      font-weight: bold;
      color: #0f5242;

      &:hover {
        color: #714b7d;
      }
    `}

  ${({ $isACity }) =>
    !$isACity &&
    css`
      color: #111;
      background-color: #a5b8be;
      padding: 2px;
      border-radius: 4px;
      box-shadow: 2px 2px 1px #2d5968;
    `}
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
