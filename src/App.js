import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css"
import "./urls"
import Banner from "./components/Banner/Banner";
import Row from "./components/RowPost/Row";
import { action, orginals } from "./urls";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Row  url ={orginals}title='Netlfix Originals'/>
      <Row url={action} title='Action' isSmall />
 
    </div>
  );
}

export default App;
