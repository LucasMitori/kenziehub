import {
  DataSpaceInput,
  DataStructure,
  BackBtn,
  RegisterSection,
} from "./styles";
import { FormStructure } from "./styles";
import logo from "../../assets/img/Logo.svg";
import { RegisterTitle } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

interface iFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio: string;
  contact: string;
  course_module: string;
}

const RegisterPage = () => {
  const { SubmitFunction } = useContext(AuthContext);

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .matches(
        /(^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*_-])).{8,}$/,
        "Deve conter 8 caraceteres, uma maiúscula, uma minúscula, um número e um caracter especial"
      )
      .required("escolha uma senha"),
    confirmPassword: yup.string().required("Senha obrigatória"),
    bio: yup.string().required("Bio obrigatório"),
    contact: yup.string().required("Contato obrigatório"),
    course_module: yup.string().required("Módulo obrigatório"),
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
      <RegisterSection>
        <RegisterTitle>
          <img src={logo} alt="Logo Kenzie Hub" />

          <BackBtn to={"/login"}>Voltar</BackBtn>
        </RegisterTitle>

        <DataStructure>
          <FormStructure onSubmit={handleSubmit(SubmitFunction)}>
            <h2>Crie sua conta</h2>
            <h3>Rápido e grátis, vamos nessa</h3>
            <DataSpaceInput>
              <label>Nome</label>
              <input
                type="text"
                id="name"
                placeholder="Digite aqui seu nome"
                {...register("name")}
              />
              <p>{errors.name?.message}</p>
            </DataSpaceInput>
            <DataSpaceInput>
              <label>Email</label>
              <input
                type="email"
                id="email"
                placeholder="Digite aqui seu email"
                {...register("email")}
              />
              .<p>{errors.email?.message}</p>
            </DataSpaceInput>
            <DataSpaceInput>
              <label>Senha</label>
              <input
                type="password"
                id="password"
                placeholder="Digite aqui sua senha"
                {...register("password")}
              />
              <p>{errors.password?.message}</p>
            </DataSpaceInput>
            <DataSpaceInput>
              <label>Confirmar Senha</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Digite novamente sua senha"
                {...register("confirmPassword")}
              />
              <p>{errors.password?.message}</p>
            </DataSpaceInput>
            <DataSpaceInput>
              <label>Bio</label>
              <input
                type="text"
                id="describe"
                placeholder="Digite aqui uma breve descrição"
                {...register("bio")}
              />
              <p>{errors.bio?.message}</p>
            </DataSpaceInput>
            <DataSpaceInput>
              <label>Contato</label>
              <input
                type="tel"
                id="cellphone"
                placeholder="99-99999-9999"
                pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}"
                {...register("contact")}
              />
              <p>{errors.contact?.message}</p>
            </DataSpaceInput>
            <DataSpaceInput>
              <label>Selecionar módulo</label>
              <select id="modules" {...register("course_module")}>
                <option value="1º Módulo">
                  1º Módulo(Introdução ao Frontend)
                </option>
                <option value="2º Módulo">2º Módulo(Frontend Avançado)</option>
                <option value="3º Módulo">
                  3º Módulo(Introdução ao Backend)
                </option>
                <option value="4º Módulo">4º Módulo(Backend Avançado)</option>
              </select>
            </DataSpaceInput>
            <button type="submit">Cadastrar</button>
          </FormStructure>
        </DataStructure>
      </RegisterSection>
    </>
  );
};

export default RegisterPage;

/****************************************
        Teste
****************************************/

// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// //import "./styles.css";

// function App() {
//   const formSchema = yup.object().shape({
//     email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
//     name: yup.string().required("Nome obrigatório"),
//     cellphone: yup.string().required("Telefone obrigatório"),
//     address: yup.string().required("Endereço obrigatório"),
//   });

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(formSchema),
//   });

//   const onSubmitFunction = (data) => console.log(data);

//   return (
//     <div className="container">
//       <h3>Formulário</h3>
//       <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
//         <input placeholder="Nome" {...register("name")} />
//         {errors.name?.message}
//         <input placeholder="Email" {...register("email")} />
//         {errors.email?.message}
//         <input placeholder="Telefone" {...register("cellphone")} />
//         {errors.cellphone?.message}
//         <input placeholder="Endereço" {...register("address")} />
//         {errors.address?.message}
//         <button type="submit">Enviar!</button>
//       </form>
//     </div>
//   );
// }

// export default App;
