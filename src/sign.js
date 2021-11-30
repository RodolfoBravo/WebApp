import React, { Component } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom"
import Register from "./components/register";
import Signin from "./components/signin"


class Sign extends Component {
  constructor() {
    super();
    this.state = { isRegister: false };
  }
  toggleRegister = (state) => () => this.setState({ isRegister: state });
  render() {
    return (
      <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Signin />} />
        <Route  path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
    );
  }
}

export default Sign;