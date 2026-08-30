import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      {/*
        First focusable element on every route: lets a keyboard user skip the
        header navigation and land on the article content.

        The app runs on HashRouter, so href="#main-content" would be read as a
        route ("/main-content") rather than an in-page anchor — the router found
        no such route and left the viewer at the foot of the page. Moving focus
        by hand avoids the hash entirely.
      */}
      <a
        className="skip-link"
        href="#main-content"
        onClick={(event) => {
          event.preventDefault();
          const main = document.getElementById("main-content");
          if (!main) return;
          main.focus();
          main.scrollIntoView({ behavior: "smooth", block: "start" });
        }}>
        Skip to main content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Switch>
        {routes.map((routeItem) => {
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              exact={routeItem.exact}
              component={lazy(() => import(`../pages/${routeItem.component}`))}
            />
          );
        })}
        </Switch>
      </main>
      <Footer />
    </Suspense>
  );
};

export default Router;
