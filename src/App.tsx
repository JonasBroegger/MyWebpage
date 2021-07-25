import {Route} from 'react-router-dom';
//import React from 'react';
import Header from './Components/Header/Header'
import Home from './Pages/Home'
import Footer from './Components/Footer/Footer'
import About from './Pages/About'
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import './App.scss';

function App() {
  // function handleCLick(event: React.MouseEvent){
  //   console.log("I've been clicked", event);
  // }

  return (
    <div className="App">
      <Header/>
      <main>
      <Route path = "/" exact>
        <Home/>
      </Route>
      <Route path = "/About">
        <About></About>
      </Route>
      <Route path = "/Projects">
        <Projects/>
      </Route>
      <Route path = "/Contact">
        <Contact/>
      </Route>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
