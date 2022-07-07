import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/SignIn" element="{<Home />}" />
        <Route path="/SignIn" element="SignIn" />
      </Routes>
    </>
  );
};

export default App;
