import { createStore } from "redux";
import { themeReducer } from "./themeReducer";

export const store = createStore(themeReducer);