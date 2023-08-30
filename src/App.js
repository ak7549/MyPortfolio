import React from "react";
import Navbar from "./portfolio/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./portfolio/Home";
import About from "./portfolio/About";
import Projects from "./portfolio/Projects";
import Contact from "./portfolio/Contact";
import Layout from "./portfolio/Layout";
import TodoNew from "./project/TodoNew";
import PageNotFound from "./portfolio/PageNotFound";
import TextUtils from "./project/TextUtils";
import Counter from "./project/Counter";
import ContactList from "./portfolio/ContactList";
import Crud from "./project/Crud";
import CrudDetails from "./project/CrudDetails";
import CrudUpdate from "./project/CrudUpdate";

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/projects/" element={<Projects />}>
              <Route exact path="todoapp" element={<TodoNew />}></Route>
              <Route exact path="textutils" element={<TextUtils />}></Route>
              <Route exact path="counter" element={<Counter />}></Route>
              <Route exact path="crud" element={<Crud />}></Route>
              <Route exact path="CrudRead" element={<CrudDetails />}></Route>
              {/* <Route exact path="speech" element={<SpchRecog />}></Route> */}
            </Route>

            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="/read" element={<ContactList />}></Route>
            <Route exact path="/crudRead" element={<CrudDetails />}></Route>
            <Route exact path="/crudUpdate" element={<CrudUpdate />}></Route>

            <Route exat path="*" element={<PageNotFound />}></Route>
          </Routes>
        </Layout>
      </Router>
    </>
  );
};

export default App;
