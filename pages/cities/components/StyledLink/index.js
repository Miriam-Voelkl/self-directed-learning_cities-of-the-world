import styled, { css } from "styled-components";
import Link from "next/link";

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

export default StyledLink;
