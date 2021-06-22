import React, { useState } from "react";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";
import { Route } from "wouter";

function App() {
  const [text, setText] = useState('')
  const handleSubmit=(e) => {
    e.preventDefault();
  }
  return (
    <div className="app">
      <section className="appContent">
        <h1 className="title">Buscador de Gifts</h1>
        <form onSubmit={(e) => handleSubmit(e)}> 
          <input className="input" type="text" placeholder= 'Buscar...' value={text} onInput={e => setText(e.target.value)}/>
        </form>
        <Route component={ListOfGifs} path="/gif/:keyword" />
        <ListOfGifs keyword={text} />
      </section>
    </div>
  );
}

export default App;
