import './App.css';
import Header from './components/NavBar/Navbar';
import { BrowserRouter as Router } from "react-router-dom";
import Landing from './Pages/Landing';
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>


function App() {
  return (
    <div className="App">
      <Router>

      <Header />
      <Landing />

      </Router>

    </div>
  );
}

export default App;
