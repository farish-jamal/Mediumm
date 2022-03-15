import './App.css';
import Create from './routes/Create';
import Home from './routes/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
  <Router>
    <div className="app">
      <Routes>
        <Route exaxt path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
