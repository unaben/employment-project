import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import playerData from "./Components/Players.json"
console.log("Json Data: ", playerData.Results);

function App() {
  const [jsonData, setJsonData] = useState([]);  
  console.log("JsonData: ", jsonData);

  useEffect(() => {
    const mergedData =
      playerData.Results &&
      playerData.Results.map((result) => ({
        // console.log(result)
        ...result,
        ...playerData.Players.find(
          (player) => player.playerId === result.playerId
        ),
      }));
    setJsonData(mergedData);
    console.log("merged: ", mergedData);
  }, []);


  return (
    <div className="App-container">
      <header className="header">
        <Header />
      </header>
      <main className="">
        <Main />
      </main>
    </div>
  );
}

export default App;
