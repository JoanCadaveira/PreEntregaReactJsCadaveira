import React from "react";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Publicidad from "./components/Publicidad";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Todavia no se agregaron productos a la web"}/>
      <Publicidad />
      <Footer />
    </div>
  );
}

export default App;
