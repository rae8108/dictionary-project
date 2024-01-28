import logo from "./logo.svg";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
      </div>
      <footer className="text-center">
        <small>coded by rae</small>
      </footer>
    </div>
  );
}
