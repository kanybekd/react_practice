import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBarMenu";
import HomePage from "./components/homepage";
import AboutUs from "./components/aboutUs";
import ContactUs from "./components/contactUs";
import ArticleList from "./components/articleList";
import ErrorPage from "./components/errorPage";
import ArticleDetailsPage from "./components/ArticleDetailsPage";

function App() {
  return (
    <div className="container">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutUs" element={<AboutUs data="hello" />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/articles/:id" element={<ArticleDetailsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// dom ={
//     h1:{
//         ul:{
//             li:"asdsad"
//             li:"asdasd"
//         }

//     }
//     p:""
//     section:
//     main:

// }
