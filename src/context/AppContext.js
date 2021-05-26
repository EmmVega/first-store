import React from 'react';
import useInitalState from '../hooks/useInitialState';

export const AppContext = React.createContext({});

const AppProvider = ({children}) => {
  const initialState = useInitalState();
  return (
    <AppContext.Provider value={initialState}>
        {children}
    </AppContext.Provider>
  );
}

export default AppProvider; 