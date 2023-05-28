import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Error from "./Components/Error/Error";
import Fixr from "./Pages/Fixr/Fixr";
import Home from "./Pages/Home/Home";
import WordContextProvider from "./Utils/WordContext";

function App() {
  const location = useLocation();
  return (
    <WordContextProvider>
      <main>
        <h1>
          Word<strong>Fixr</strong>
        </h1>
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route index element={<Home />} />
            <Route path="/fixr" element={<Fixr />} />
            <Route path="/*" element={<Error msg="Page not found" />} />
          </Routes>
        </AnimatePresence>
      </main>
    </WordContextProvider>
  );
}

export default App;
