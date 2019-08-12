import React from 'react';
import Header from "./components/Header";
import Calculator from "./components/Calculator";
import style from "./App.module.css"

function App() {
  return (
    <div className={style.app}>
        <Header title="React Calculator"/>
        <div className="mainContent">
            <Calculator/>
        </div>
    </div>
  );
}

export default App;
