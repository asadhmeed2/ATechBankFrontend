import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Layout } from "./modules/shared/Layout";

import { Landing } from "./modules/Landing";
import { Operations } from "./modules/Operations";
import { Breakdown } from "./modules/Breakdown";

import { navLinkNames, navLinks } from "./consts";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route
              path={navLinks[navLinkNames.Operations]}
              element={<Operations />}
            />

            <Route
              path={navLinks[navLinkNames.Breakdown]}
              element={<Breakdown />}
            />

            <Route
              path={navLinks[navLinkNames.Transactions]}
              element={<Landing />}
              exact
            />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
