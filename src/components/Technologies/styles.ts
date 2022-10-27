import styled from "styled-components";
import Modal from "react-bootstrap/Modal";

export const TechSpace = styled.section`
  width: 100%;
  height: 70vh;
  background-color: var(--color-grey-1);

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

export const TechTitle = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;

  & > h2 {
    font-family: var(--font-secondary-inter);
    font-size: var(--font-subtitle-18);
    color: var(--color-grey-0);
    font-weight: var(--font-weight-700);
  }

  & > button {
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: var(--radius-4);
    background-color: var(--color-grey-2);
  }

  @media screen and (min-width: 480px) {
    padding: 0 15px;
  }
  @media screen and (min-width: 768px) {
    & {
      padding: 0px 15px;
    }
  }
  @media screen and (min-width: 1024px) {
    & {
      padding: 0px 15px;
    }
  }
  @media screen and (min-width: 1200px) {
    & {
      padding: 0px 15px;
    }
    @media screen and (max-width: 1920px) {
      & {
        padding: 0px 30px;
      }
    }
  }
`;

export const TechCardSpace = styled.article`
  width: 95%;
  height: 90%;
  background-color: var(--color-grey-2);
  margin: 0 auto;
  padding: 22px 0px;
`;

export const TechCard = styled.button`
  width: 95%;
  height: 50px;
  background-color: var(--color-grey-1);
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  border: none;
  border-radius: var(--radius-4);
  margin-bottom: 20px;

  &:focus {
    background-color: var(--color-grey-3);
  }

  & > h3 {
    font-family: var(--font-secondary-inter);
    color: var(--color-grey-0);
    font-weight: var(--font-weight-700);
    font-size: var(--font-text-16);
  }

  & > h4 {
    font-family: var(--font-secondary-inter);
    color: var(--color-grey-4);
    font-weight: var(--font-weight-400);
    font-size: var(--font-text-12);
  }
`;

export const ModalSpace = styled(Modal)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-transparent-01);
  z-index: 1000;
`;

export const ModalSCard = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-2);
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  border-radius: var(--radius-4);

  & > div {
    width: 100%;
    height: 50px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    background-color: var(--color-grey-3);
  }

  & > div > button {
    background-color: var(--color-grey-3);
    border: none;
  }

  & > div > h2 {
    font-family: var(--font-secondary-inter);
    color: var(--color-grey-0);
    font-weight: var(--font-weight-700);
    font-size: var(--font-text-14);
  }

  & > form {
    width: 100%;
    height: 80%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: 0 15px;
  }

  & > form > label {
    font-family: var(--font-secondary-inter);
    color: var(--color-grey-0);
    font-weight: var(--font-weight-400);
    font-size: var(--font-text-12);
  }

  & > form > input,
  & > form > select {
    width: 100%;
    height: 40px;
    background-color: var(--color-grey-3);
    border: 1px solid var(--color-grey-0);
    padding-left: 10px;
  }

  & > form > select > input:focus,
  & > form > select > select:focus {
    outline: none;
    border: 1px solid var(color-quartenary);
    background-color: var(--color-grey-4);
  }

  & > form > input::placeholder {
    color: var(--color-grey-0);
  }

  & > form > input:focus::placeholder {
    color: transparent;
  }

  & > form > select:valid {
    color: var(--color-grey-0);
  }

  & > form > button {
    width: 100%;
    height: 40px;
    background-color: var(--color-primary);
    font-family: var(--font-secondary-inter);
    color: var(--color-grey-0);
    font-weight: var(--font-weight-500);
    font-size: var(--font-text-12);
    border: 1px solid var(--color-primary);
    border-radius: var(--radius-4);
  }
`;

export const BtnSpace = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const SalvarAlteracoesBtn = styled.button`
  width: 50%;
  height: 40px;
  background-color: var(--color-primary);
  font-family: var(--font-secondary-inter);
  color: var(--color-grey-0);
  font-weight: var(--font-weight-500);
  font-size: var(--font-text-12);
  border: 1px solid var(--color-primary);
  border-radius: var(--radius-4);
`;

export const ExcluirBtn = styled.div`
  width: 40%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-4);
  font-family: var(--font-secondary-inter);
  color: var(--color-grey-0);
  font-weight: var(--font-weight-500);
  font-size: var(--font-text-12);
  border: 1px solid var(--color-grey-4);
  border-radius: var(--radius-4);
`;
