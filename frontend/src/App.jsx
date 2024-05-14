import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import UpdateFormComponent from "./components/UpdateForm";
import HeaderContainer from "./components/HeaderContainer";
import CreateFormComponent from "./components/CreateForm";
import MainPage from "./components/MainPage";
import "./App.css";

function App() {

  return (
    <BrowserRouter>
    <HeaderContainer />
      <Routes>
        <Route path="/create" element={<CreateFormComponent />} />
        <Route path="/update/:name/:email/:phone_number/:id" element={<UpdateFormComponent />} />
        <Route path="/main" element={<MainPage />} />
        
        <Route path="*" element={<div>Page not found, sowy</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
