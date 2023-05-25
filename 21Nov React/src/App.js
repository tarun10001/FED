import React, { useContext } from "react";
import Card from "./components/Card";
import { NewsContext } from "./content/newsProvider";
import "./App.css";

function App() {
  const {
    response: { articles },
    loading,
  } = useContext(NewsContext);
  return (
    <div className="App">
      {loading && <h1 className="loader"></h1>}

      {articles?.map((articl, index) => {
        return <Card key={index} {...articl} />;
      })}
    </div>
  );
}

export default App;
