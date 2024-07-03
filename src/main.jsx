import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthContextProvider } from "./Context/AuthContext.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <App />
    <Toaster
      toastOptions={{ style: { background: "gray", text: "white" } }}
    ></Toaster>
  </AuthContextProvider>
);
