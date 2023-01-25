import "./App.css";
import { Link, Route } from "wouter";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import StaticContext from "./context/StaticContext";
import Details from "./pages/Details";
import { GifsContextProvider } from "./context/GifsContext";

function App() {
  return (
    <StaticContext.Provider value={{ name: "sapo perro", suscribete: true }}>
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <h1>Giffy</h1>
          </Link>

          <GifsContextProvider>
            <Route path="/" component={Home} />
            <Route path="/search/:keyword/:rating?" component={SearchResults} />
            <Route path="/gif/:id" component={Details} />
            <Route path="/404" component={() => <h2>404 ERROR :(</h2>} />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
