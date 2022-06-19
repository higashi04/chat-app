import React from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [id, setId] = useLocalStorage('id');

  return (
    <main>
            {id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />} 
      
    </main>
  )
}

export default App;
