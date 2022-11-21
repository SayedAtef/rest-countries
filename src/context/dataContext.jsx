import { createContext, useReducer } from "react";
import dataReducer from "./dataReducer";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initialState = {
    data: {
      select: "",
      search: "",
    },
  };

  const [state, dispatch] = useReducer(dataReducer, initialState);

  return (
    <DataContext.Provider value={{ ...state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
