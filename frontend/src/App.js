import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Questions from "./components/Questions";
import QuestionInput from "./components/QuestionInput";
import QuestionUpdate from "./components/QuestionUpdate";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/questions" exact>
            <Questions />
          </Route>
          <Route path="/questions/new" exact>
            <QuestionInput />
          </Route>
          <Route exact path="/questions/:id/update">
            <QuestionUpdate />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
