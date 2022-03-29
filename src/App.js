import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { Context } from "./Components/Context/Context";
import playerData from "./Components/Players.json";
console.log("Json Data: ", playerData.Results);

function App() {
  const [jsonData, setJsonData] = useState([]);
  const [sortOrder, setSortOrder] = useState("ASC");
  console.log("JsonData: ", jsonData);

  useEffect(() => {
    const mergedData =
      playerData.Results &&
      playerData.Results.map((result) => ({
        // console.log(result)
        ...result,
        ...playerData.Players.find(
          (player) => player.PlayerId === result.PlayerId
        ),
      }));
    setJsonData(mergedData);
    console.log("merged: ", mergedData);
  }, []);

  const sortingColumn = (str) => {
    if (sortOrder === "ASC") {
      const sortedArray =
        jsonData && jsonData.sort((a, b) => (a[str] > b[str] ? 1 : -1));
      setJsonData(sortedArray);
      setSortOrder("DSCE");
    }
    if (sortOrder === "DSCE") {
      const sortedArray =
        jsonData && jsonData.sort((a, b) => (a[str] < b[str] ? 1 : -1));
      setJsonData(sortedArray);
      setSortOrder("ASC");
    }
  };
  return (
    <div className="App-container">
      <Header />
      <Context.Provider value={{ jsonData, sortingColumn }}>
        <Main />
      </Context.Provider>
    </div>
  );
}

export default App;
