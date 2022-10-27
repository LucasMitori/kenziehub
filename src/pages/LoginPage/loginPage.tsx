import { DataSpaceInput, DataStructure, RegisterBtn } from "./styles";
import { FormStructure } from "./styles";
import { LoginSection } from "./styles";
import logo from "../../assets/img/Logo.svg";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

interface iFormValues {
  email: string;
  password: string;
}

const LoginPage = () => {
  const { LoginUser } = useContext(AuthContext);

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .matches(
        /(^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*_-])).{8,}$/,
        "Deve conter 8 caraceteres, uma maiúscula, uma minúscula, um número e um caracter especial"
      )
      .required("escolha uma senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormValues>({
    resolver: yupResolver(formSchema),
  });

  return (
    <>
      <LoginSection>
        <img src={logo} alt="Logo Kenzie Hub" />

        <DataStructure>
          <FormStructure onSubmit={handleSubmit(LoginUser)}>
            <h2>Login</h2>
            <DataSpaceInput>
              <label>Email</label>
              <input
                type="email"
                id="email"
                placeholder="Seu e-mail"
                {...register("email")}
              />
              <p>{errors.email?.message}</p>
            </DataSpaceInput>
            <DataSpaceInput>
              <label>Senha</label>
              <input
                type="password"
                id="password"
                placeholder="Sua senha"
                {...register("password")}
              />
              <p>{errors.password?.message}</p>
            </DataSpaceInput>
            <button type="submit">Entrar</button>
          </FormStructure>

          <span>Ainda não possui uma conta?</span>

          <RegisterBtn to={`/register`}>Cadastre-se</RegisterBtn>
        </DataStructure>
      </LoginSection>
    </>
  );
};

export default LoginPage;
