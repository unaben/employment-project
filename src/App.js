import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import playerData from "./Components/Players.json"
console.log("Json Data: ", playerData);

function App() {
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
