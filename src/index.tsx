import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import "antd/lib/style/index.css";
import "antd/lib/grid/style/index.css";
import "antd/lib/drawer/style/index.css";
import "antd/lib/notification/style/index.css";

import Router from "./router";
import i18n from "./translation";

/*
  The site used hash routes until every route got its own HTML file. Addresses
  already shared in the old form are moved to the real path before routing starts.
*/
if (window.location.hash.startsWith("#/")) {
  window.history.replaceState(null, "", window.location.hash.slice(1));
}

const App = () => (
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <Router />
    </I18nextProvider>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
