import { createContext, useContext, useReducer } from 'react';

export const AppContext = createContext();

const initialState = {
  result: [],
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'RESULT':
      return { ...state, result: action.payload, error: null };
    case 'ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
