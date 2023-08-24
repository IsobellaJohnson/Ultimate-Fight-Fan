import './App.css';
import Navbar from './components/Navbar'
import Rankings from './components/Rankings/Rankings'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
      <Route path="/events" element={<Rankings />} />
        <Route path="/athlete" element={<Rankings />} />
        <Route path="/rankings" component={<Rankings/>} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
