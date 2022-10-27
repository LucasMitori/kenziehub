import { Link } from "react-router-dom";
import styled from "styled-components";

/****************************************

    Author: Lucas Mitori Oliveira Okumura
    contact: lucas.mitori@hotmail.com
    cel: (11) 9-7749-2121
    Name: Entrega - Kenziehub - Parte 1 (Cadastro e Login)
    Description: Atividade Avaliativa
    ~ *   Login Page styles   * ~

            Version: 1.0

****************************************/

export const LoginSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-1);

  & > img {
    margin-bottom: 20px;
  }
`;

//--------------------~>   Skip line   <~--------------------

/*----------------------------
~* Login Page Customization *~
------------------------------*/

export const DataStructure = styled.div`
  width: 90%;
  height: 60%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--color-grey-2);
  border-radius: var(--radius-4);
  box-shadow: 0px 4px 4px -8px rgba(0, 0, 0, 0.25);

  & > span {
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-12);
    font-weight: var(--font-weight-600);
    color: var(--color-grey-4);
  }

  & > button {
    width: 90%;
    height: 40px;
    background-color: var(--color-grey-4);
    color: var(--color-grey-0);
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-12);
    font-weight: var(--font-weight-500);
    border: 1px solid var(--color-grey-4);
    border-radius: var(--radius-4);
  }

  @media screen and (min-width: 480px) {
    & {
      width: 450px;
    }
  }
  @media screen and (min-width: 768px) {
    & {
      width: 450px;
    }
  }
  @media screen and (min-width: 1024px) {
    & {
      width: 450px;
    }
  }
  @media screen and (min-width: 1200px) {
    & {
      width: 450px;
    }
  }
`;

export const RegisterBtn = styled(Link)`
  width: 90%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: var(--color-grey-4);
  color: var(--color-grey-0);
  font-family: var(--font-secondary-inter);
  font-size: var(--font-text-14);
  font-weight: var(--font-weight-500);
  border: 1px solid var(--color-grey-4);
  border-radius: var(--radius-4);
`;

export const FormStructure = styled.form`
  width: 90%;
  height: 65%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;

  & > h2 {
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-16);
    font-weight: var(--font-weight-700);
    color: var(--color-grey-0);
  }

  & > button {
    width: 95%;
    height: 40px;
    background-color: var(--color-primary);
    border: 1px solid var(--color-primary);
    border-radius: var(--radius-4);
    color: var(--color-white-mode);
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-14);
    font-weight: var(--font-weight-500);
  }
`;

export const DataSpaceInput = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: flex-start;
  background-color: transparent;

  & > label {
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-10);
    font-weight: var(--font-weight-400);
    color: var(--color-grey-0);
  }

  & > input,
  & > select {
    width: 100%;
    height: 40px;
    background-color: var(--color-grey-3);
    border: 1px solid var(--color-grey-0);
    border-radius: var(--radius-4);
    color: var(--color-grey-0);
    padding-left: 20px;
  }

  & > input::placeholder {
    color: var(--color-grey-4);
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-12);
    font-weight: var(--font-weight-400);
  }

  & > input:focus {
    outline: none;
    border: 1px solid var(--color-secondary);
  }

  & > p {
    color: var(--color-grey-0);
    margin-top: 5px;
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-10);
  }
`;
