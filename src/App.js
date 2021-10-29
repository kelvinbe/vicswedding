import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './components/NavBar/Navbar';
import { BrowserRouter as Router } from "react-router-dom";
import {Route,Switch} from 'react-router-dom'
import Landing from './Pages/Landing';
import Home from './components/Home/Home'
import About from './components/About Us/About '
import Service from './components/Services/Service'
import Meet from './components/ContactUs/ContactUs'
import Roracio from './components/Roracio/Roracio'
import "react-slideshow-image/dist/styles.css";
import Loading from './components/Loading/Loading'
import 'react-circular-progressbar/dist/styles.css';
function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000)
  }, [])


  return (
    <>
    { loading === false ? (
    <div className="fill-window">
      <Router>

      <Header />
  <Switch> 
<Route path="/" component={Landing} exact/>
<Route path="/meet" component={Meet} />
{/* <Route path="/portfolio" component={Service} /> */}
<Route path="/journey" component={Roracio} />
<Route path="/support" component={About} />
</Switch>

      </Router>

    </div>
    ):
    <div>
    <Loading />
    </div>}
    </>
  );
}

export default App;


