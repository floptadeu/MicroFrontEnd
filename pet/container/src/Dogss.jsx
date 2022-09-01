import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import MicroFrontend from "./MicroFrontend";
import "./App.css";

const {
    REACT_APP_DOGS_HOST: dogsHost,
    REACT_APP_CATS_HOST: catsHost,
  } = process.env;
  

  function Dogs({ history }) {
    return <MicroFrontend history={history} host={dogsHost} name="Dogs" />;
  }