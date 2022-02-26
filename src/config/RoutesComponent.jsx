import React from "react";

import { Route, Routes as Switch } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from "../pages/detail/Detail";

const RoutesComponent = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact element={<Home />} />
        <Route path="/:category/search/:keyword" element={<Catalog />} />
        <Route path="/:category/:id" element={<Detail />} />
        <Route path="/:category" element={<Catalog />} />
      </Switch>
    </>
  );
};

export default RoutesComponent;
