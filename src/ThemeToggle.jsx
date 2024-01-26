import { useGlobalContext } from "./context";
import {FaMoon, FaSun} from 'react-icons/fa';
import {BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

const ThemeToggle = () => {
  const {isDarkTheme, toogleDarkTheme} = useGlobalContext();

  return ( <section className="toggle-container">
      <button onClick={toogleDarkTheme} className="dark-toggle">
        {isDarkTheme ? <BsFillMoonFill className="toggle-icon" /> : <BsFillSunFill  className="toggle-icon"/>}
      </button>
  </section>
  )
}

export default ThemeToggle