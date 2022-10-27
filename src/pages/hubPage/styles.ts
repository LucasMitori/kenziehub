import styled from "styled-components";

export const MainSpace = styled.main`
  width: 100%;
  height: 100vh;
  background-color: var(--color-grey-1);
`;

export const SectionSpaceUser = styled.section`
  width: 100%;
  height: 150px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  padding: 0 15px;
  border-bottom: 1px solid var(--color-grey-2);

  & > h1 {
    font-family: var(--font-secondary-inter);
    font-size: var(--font-subtitle-18);
    color: var(--color-grey-0);
    font-weight: var(--font-weight-700);
    margin-bottom: 15px;
  }

  & > h3 {
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-12);
    font-weight: var(--font-weight-400);
    color: var(--color-grey-4);
  }

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
