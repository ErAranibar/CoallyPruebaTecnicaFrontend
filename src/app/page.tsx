'use client';

import { Provider } from "react-redux";
import store from "../store/index";
import Home from "./components/home";

export default function Main() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
