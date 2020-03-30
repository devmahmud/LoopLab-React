import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavMenu from "./components/layout/NavMenu";
import Footer from "./components/layout/Footer";
import HomeSection from "./components/home/HomeSection";
import ExploreSection from "./components/explore/ExploreSection";
import CreateSection from "./components/create/CreateSection";
import ShareSection from "./components/share/ShareSection";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavMenu />
      <Switch>
        <Route exact path="/" component={HomeSection} />
        <Route exact path="/explore" component={ExploreSection} />
        <Route exact path="/create" component={CreateSection} />
        <Route exact path="/share" component={ShareSection} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
