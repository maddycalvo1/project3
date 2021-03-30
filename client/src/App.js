import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import SearchResultsPage from "./pages/SearchResultsPage";
import ParksPage from "./pages/ParksPage";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer/Footer"
import { StoreProvider } from "./utils/GlobalState";

function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/SearchResultsPage" component={SearchResultsPage} />
            <Route exact path="/ParksPage" component={ParksPage} />
            <Route exact path="/posts/:id" component={Detail} />
            <Route component={NoMatch} />
          </Switch>
        <Footer />
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
