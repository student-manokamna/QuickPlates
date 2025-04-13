// App.jsx
import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/error";
import RestaurentMenu from "./components/Restaurent_menu";
import UserContext from "./utils/userCOntext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart.jsx";

const Grocery = lazy(() => import("./components/Grocerry"));
const About = lazy(() => import("./components/About.jsx"));

const App = () => {
  const [userName, setuserName] = useState();

  useEffect(() => {
    const data = {
      name: "user name",
    };
    setuserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setuserName }}>
        <BrowserRouter>
          <div className="app">
            <Header />
            <Routes>
              <Route path="/" element={<Body />} />
              <Route
                path="/about"
                element={
                  <Suspense fallback={<h1>Loading....</h1>}>
                    <About />
                  </Suspense>
                }
              />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/grocery"
                element={
                  <Suspense fallback={<h1>Loading....</h1>}>
                    <Grocery />
                  </Suspense>
                }
              />
              <Route path="/restaurents/:resId" element={<RestaurentMenu />} />
              <Route path="/cart" element={<Cart />} />
              {/* Error route can be added to handle 404 */}
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </BrowserRouter>
      </UserContext.Provider>
    </Provider>
  );
};

export default App
