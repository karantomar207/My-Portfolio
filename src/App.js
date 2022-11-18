import React from 'react';
import logo from './logo.svg';
import './App.css';

// class App extends Reacr.component{
//   constructor(props){
//     super(props);
//     this.state={apiResponses:""}
//   }
//   callAPI(){
//     fetch("https://localhost:9000/testAPI")
//     .then(res=>res.text())
//     .then(res=>this.setstate({apiResponses:res}));
//   }

//   component(){
//     this.callAPI();

//   }
// }

import 'bootstrap/dist/css/bootstrap.min.css';
import { MyNavBar } from "./components/MyNavBar";
import { MyBanner } from "./components/MyBanner";
import { MySkills } from "./components/MySkills";
import { MyProjects } from "./components/MyProjects";
import { MyContact } from "./components/MyContact";
import { MyFooter } from "./components/MyFooter";
function App() {
  return (
    <div className="App">
      <MyNavBar />
      <MyBanner />
      <MySkills />
      <MyProjects />
      <MyContact />
      <MyFooter />
    </div>
  );
}

export default App;
