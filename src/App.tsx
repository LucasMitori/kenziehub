import Routes from "./routes";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./contexts/AuthContext";
import ReactModal from "react-modal";

const App = () => {
  return (
    <>
      <ToastContainer />
      <AuthProvider>
        <Routes />
        <ReactModal isOpen={false} />
      </AuthProvider>
    </>
  );
};

export default App;
