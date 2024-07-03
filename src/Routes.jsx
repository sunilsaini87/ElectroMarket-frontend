import { useRoutes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import ProductGrid from "./pages/ProductGrid/index.jsx";
import Cart from "./pages/Cart/index.jsx";
import Signin from "./pages/Signin/index.jsx";
import SignUp from "./pages/SignUp/index.jsx";
import SignupAdmin from "./pages/SignupAdmin/index.jsx";
import SighinAdmin from "./pages/SigninAdmin/index.jsx";
import About from "./pages/About/index.jsx";
import Contact from "./pages/Contact/index.jsx";
import CreateProduct from "./pages/CreateProduct/index.jsx";
import ProductDisplay from "./pages/ProductDisplay/index.jsx";
import Chatbot from "./pages/ChatBot/index.jsx";
import UserDetails from "./pages/UserDetails/index.jsx";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/productgrid",
      element: <ProductGrid />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/user/signin",
      element: <Signin />,
    },
    {
      path: "/user/signup",
      element: <SignUp />,
    },
    {
      path: "/admin/signup",
      element: <SignupAdmin />,
    },
    {
      path: "/admin/signin",
      element: <SighinAdmin />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/admin/createproduct",
      element: <CreateProduct />,
    },
    {
      path: "/aboutproduct",
      element: <ProductDisplay />,
    },
    {
      path: "/chatbot",
      element: <Chatbot />,
    },
    {
      path: "/userdetails",
      element: <UserDetails />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
