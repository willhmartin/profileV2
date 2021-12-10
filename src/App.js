import React from "react";
import { Route, Switch, useLocation, useHistory } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import { AnimatePresence } from "framer-motion";

export default function App() {
  const [isFirstMount, setIsFirstMount] = React.useState(true);
  const location = useLocation();
  const history = useHistory();

  React.useEffect(() => {
    const unlisten = history.listen(() => {
      isFirstMount && setIsFirstMount(false);
    });

    return unlisten;
  }, [history, isFirstMount]);

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route
          exact
          path="/"
          component={props => (
            <HomePage isFirstMount={isFirstMount} {...props} />
          )}
        />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </AnimatePresence>
  );
}
