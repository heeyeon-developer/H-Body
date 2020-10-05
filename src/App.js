import React, {Component} from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import NavPage from "./components/Nav/NavPage";
// import HomePage from './components/Home/HomePage'
import {
  HomePage,
  GymPage,
  TrainingPage,
  DietPage,
  BMIPage,
  LoginPage,
  RegisterPage,
} from "./pages";

function App() {
  return (
    <div>
      <NavPage />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/Gym" component={GymPage} />
      <Route exact path="/Training" component={TrainingPage} />
      <Route exact path="/Diet" component={DietPage} />
      <Route exact path="/BMI" component={BMIPage} />
      <Route exact path="/Login" component={LoginPage} />
      <Route exact path="/Register" component={RegisterPage} />
    </div>
  );
}

export default App;
