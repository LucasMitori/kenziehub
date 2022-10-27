import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import {
  TechCard,
  TechCardSpace,
  TechSpace,
  TechTitle,
  ModalSpace,
  ModalSCard,
  BtnSpace,
  SalvarAlteracoesBtn,
  ExcluirBtn,
} from "./styles";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { IconContext } from "react-icons";
import { MdOutlineExitToApp } from "react-icons/md";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// ReactModal.setAppElement("*");

interface iTech {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}

interface iFormValues {
  title: string;
  status: string;
}

const TechnologiesSpace = () => {
  const { createTech, user, deleteTech, changeTech } = useContext(AuthContext);

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [techCard, setTechCard] = useState<iTech>({} as iTech);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = (element: iTech) => {
    // setValue("title", element.title);
    setTechCard(element);
    setShow2(true);
  };

  const EditTech = (data: iFormValues) => {
    console.log(data);
    changeTech(techCard, data);
  };

  const defaultValues = {
    title: techCard.title ?? "",
    status: "",
  };

  const formSchema = yup.object().shape({
    title: yup.string().required("Tecnologia obrigatória"),
    status: yup.string().required("Nivel obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues,
  });

  console.log(errors);
  return (
    <>
      <TechSpace>
        <TechTitle>
          <h2>Tecnologias</h2>
          <button onClick={handleShow}>
            <IconContext.Provider
              value={{
                color: "var(--color-grey-0)",
                size: "30px",
              }}
            >
              <AiOutlinePlusSquare />
            </IconContext.Provider>
          </button>
        </TechTitle>
        <TechCardSpace>
          {user.techs.map((element: iTech) => {
            return (
              <TechCard
                type="button"
                onClick={() => handleShow2(element)}
                key={element.id}
              >
                <h3>{element.title}</h3>
                <h4>{element.status}</h4>
              </TechCard>
            );
          })}
          {/* <TechCard type="button" onClick={handleShow2}>
            <h3>React JS</h3>
            <h4>Intermediário</h4>
          </TechCard> */}
        </TechCardSpace>
      </TechSpace>
      <ModalSpace show={show} onHide={handleClose}>
        <ModalSCard>
          <div>
            <h2>Cadastrar Tecnologia</h2>
            <button type="button" onClick={handleClose}>
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-4)",
                  size: "2em",
                }}
              >
                <MdOutlineExitToApp />
              </IconContext.Provider>
            </button>
          </div>

          <form onSubmit={handleSubmit(createTech)}>
            <label id="name">Nome</label>
            <input
              type="text"
              id="name"
              placeholder="Type your Technology"
              {...register("title")}
            />
            <p>{errors.title?.message}</p>
            <label>Selecionar status</label>
            <select id="status" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediario">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            <button>Cadastrar Tecnologia</button>
          </form>
        </ModalSCard>
      </ModalSpace>

      <ModalSpace show={show2} onHide={handleClose2}>
        <ModalSCard>
          <div>
            <h2>Tecnologia Detalhes</h2>
            <button type="button" onClick={handleClose2}>
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-4)",
                  size: "2em",
                }}
              >
                <MdOutlineExitToApp />
              </IconContext.Provider>
            </button>
          </div>

          <form onSubmit={handleSubmit(EditTech)}>
            <label id="name">Nome</label>
            <input
              type="text"
              id="name"
              // placeholder={techCard.title}
              value={techCard.title}
              disabled
              {...register("title")}
            />
            <label>Selecionar status</label>
            <select id="status" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediario">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            <BtnSpace>
              <SalvarAlteracoesBtn type="submit">
                Salvar alterações
              </SalvarAlteracoesBtn>
              <ExcluirBtn onClick={() => deleteTech(techCard.id)}>
                Excluir
              </ExcluirBtn>
            </BtnSpace>
          </form>
        </ModalSCard>
      </ModalSpace>
    </>
  );
};

export default TechnologiesSpace;
