import { createContext, useReducer } from "react";
import { LOG_IN, SELECT } from "../assets/constants";

export const MainContext = createContext();

const Provider = ({ children }) => {
  const State = {
    user: "",
    answer: 1,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case LOG_IN:
        return {
          ...state,
          user: action.payload,
        };

      case SELECT:
        return {
          ...state,
          answer: action.payload,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, State);
  return (
    <MainContext.Provider value={{ state, dispatch }}>
      {children}
    </MainContext.Provider>
  );
};

export default Provider;
