import { lazy, Suspense, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";
import routesMeta from "../routes-meta.json";

const NotFound = lazy(() => import("../pages/NotFound"));

const Router = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.replace(/\/?$/, "/");
    const route = routesMeta.find((item) => item.path === path);
    document.title = route ? route.title : "Page Not Found | DevPulse Tech Blog";
  }, [pathname]);

  return (
    <Suspense fallback={null}>
      <Styles />
      {/*
        First focusable element on every route: lets a keyboard user skip the
        header navigation and land on the article content.

        Moving focus by hand also scrolls the content into view, which the bare
        anchor does not do reliably under the fixed header.
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
        <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </Suspense>
  );
};

export default Router;
