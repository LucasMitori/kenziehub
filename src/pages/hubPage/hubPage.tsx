import HeaderSpace from "../../components/Header/Header";
import { MainSpace, SectionSpaceUser } from "./styles";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import TechnologiesSpace from "../../components/Technologies/Technologies";

const HubPage = () => {
  const { loading, user } = useContext(AuthContext);

  if (loading) {
    return null;
  }

  return (
    <>
      {user ? (
        <>
          <HeaderSpace />
          <MainSpace>
            <SectionSpaceUser>
              <h1>Olá, {`${user.name}`}</h1>
              <h3>{`${user.course_module} (${user.bio})`}</h3>
            </SectionSpaceUser>
            <TechnologiesSpace />
          </MainSpace>
        </>
      ) : (
        <Navigate to="/" replace />
      )}
    </>
  );
};

export default HubPage;
