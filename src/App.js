import Category from "./components/Category";
import Pages from "./pages/Pages";
import { BrowserRouter, Link } from "react-router-dom";
import Search from "./components/Search";
import { GiKnifeFork } from "react-icons/gi";
import { BsGithub, BsInstagram, BsTelegram } from "react-icons/bs";
import Loader from "./pages/Loader";
import { createContext, useState } from "react";

export const ThemeContext = createContext()

function App() {
  const [loader, setLoader] = useState(true);
  return (
    <ThemeContext.Provider value={{ setLoader: setLoader, loader: loader }}>
      <div className="App">
          <BrowserRouter>
            <div className="nav">
              <div>
                <GiKnifeFork />
                <Link to={"/"} className="logo">
                  deliciouss
                </Link>
              </div>
              <div className="author">
                <div className="logo">
                  <h2 className="logo_link">Abbosbek Qodirov</h2>
                </div>
                <div className="author_info">
                  <div>
                    <a href="https://github.com/AbbosbekQodirov">
                      <BsGithub />
                    </a>
                  </div>
                  <div>
                    <a href="https://t.me/Abbosbek_2501_TATU_FF">
                      <BsTelegram />
                    </a>
                  </div>
                  <div>
                    <a href="https://www.instagram.com/abbosbekqodirov2501/">
                      <BsInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <Search />
            <Category />
            <Pages />
          </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
