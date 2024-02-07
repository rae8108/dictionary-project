import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>
      </div>
      <footer className="text-center">
        <small>
          coded by Rayan, open-sourced on
          <a href="https://github.com/rae8108/dictionary-project"> Github </a>
          and hosted on
          <a href="https://dictionary-project-sun.netlify.app/"> Netlify</a>
        </small>
      </footer>
    </div>
  );
}
