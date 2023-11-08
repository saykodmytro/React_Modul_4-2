import { createContext } from 'react';

export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  return (
    <ModalContext.Provider value={{ dayOfTheMonth: new Date().getDate() }}>
      {children}
    </ModalContext.Provider>
  );
};
