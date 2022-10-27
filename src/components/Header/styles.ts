import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 0 15px;
  align-items: center;
  background-color: var(--color-grey-1);
  border-bottom: 1px solid var(--color-grey-2);

  @media screen and (min-width: 480px) {
    padding: 0 15px;
  }
  @media screen and (min-width: 768px) {
    & {
      padding: 0 100px;
    }
  }
  @media screen and (min-width: 1024px) {
    & {
      padding: 0 200px;
    }
  }
  @media screen and (min-width: 1200px) {
    & {
      padding: 0 300px;
    }
  }
`;

export const ExitBtn = styled(Link)`
  width: 60px;
  height: 32px;
  border-radius: var(--radius-4);
  background-color: var(--color-grey-2);
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: var(--color-grey-0);
  font-family: var(--font-secondary-inter);
  font-size: var(--font-text-12);
  font-weight: var(--font-weight-600);
`;
