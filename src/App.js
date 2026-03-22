import logo from "./logo.svg";
import "./App.css";
import PasswordGenerator from "./pages/PasswordGenerator";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <PasswordGenerator />
      <ToastContainer />
    </div>
  );
}

export default App;
