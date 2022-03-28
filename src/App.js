import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";

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
