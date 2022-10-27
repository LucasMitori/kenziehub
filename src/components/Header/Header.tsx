import { ExitBtn, Header } from "./styles";
import logo from "../../assets/img/Logo.svg";

const HeaderSpace = () => {
  function localStorageClean() {
    localStorage.clear();
  }

  return (
    <Header>
      <img src={logo} alt="Logo"></img>
      <ExitBtn to={"/login"} onClick={() => localStorageClean()}>
        Sair
      </ExitBtn>
    </Header>
  );
};

export default HeaderSpace;
