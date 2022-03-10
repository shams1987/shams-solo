import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Questions from "./components/Questions";
import QuestionInput from "./components/QuestionInput";
import QuestionUpdate from "./components/QuestionUpdate";
import Answers from "./components/Answers";
import AnswerInput from "./components/AnswerInput";

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
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/questions">
            <Questions />
          </Route>
          <Route exact path="/questions/new">
            <QuestionInput />
          </Route>
          <Route exact path="/questions/:id/update">
            <QuestionUpdate />
          </Route>
          <Route exact path="/answers/new">
            <AnswerInput />
          </Route>
          <Route exact path="/answers/:id">
            <Answers />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
