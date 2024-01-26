import { createContext, useState, useContext, useEffect } from "react";

const AppContext = createContext();



const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const storedDarkMode = localStorage.getItem('darkTheme');

  if (storedDarkMode === null) {
      return prefersDarkMode;
  }

  return storedDarkMode === 'true';
};










export const AppProvider = ({children}) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  const [searchTerm, setSearchTerm] = useState('dog');

  const toogleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);

    document.body.classList.toggle("dark-theme", newDarkTheme);
  }

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme);
  }, [])

  return (<AppContext.Provider value={{isDarkTheme, toogleDarkTheme, searchTerm, setSearchTerm}}>
    {children}
  </AppContext.Provider>)
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}