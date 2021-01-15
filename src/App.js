import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/profile/ProfilePage";
import ProfileEditPage from "./pages/profile/ProfileEditPage";
import ProductUploadPage from "./pages/product/ProductUploadPage";
import ProductDetailPage from "./pages/product/ProductDetailPage";
import ProductEditPage from "./pages/product/ProductEditPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.css";
import Header from "./components/Header";
import { GlobalStyles } from "./GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/blog" />
        <Route path="/community" />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={RegisterPage} />
        <Route path="/@:username" component={ProfilePage} />
        <Route path="/me/settings" component={ProfileEditPage} />
        <Route path="/product/new" component={ProductUploadPage} />
        <Route path="/product/:id" component={ProductDetailPage} />
        <Route path="/product/:id/edit" component={ProductEditPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}

export default App;
