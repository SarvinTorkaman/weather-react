import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather city="london" />
      </header>
      <footer>
        This app is made by{" "}
        <a
          href="https://elegant-stonebraker-6f49e2.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Sarvin
        </a>{" "}
        and it is open-source on{" "}
        <a
          href="https://elegant-stonebraker-6f49e2.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </footer>
    </div>
  );
}

export default App;
