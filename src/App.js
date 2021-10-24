import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './components/NavBar/Navbar';
import { BrowserRouter as Router } from "react-router-dom";
import Landing from './Pages/Landing';
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
      <Landing />
     

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
