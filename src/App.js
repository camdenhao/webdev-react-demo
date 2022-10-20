import './App.css';
import DogBoard from './components/DogBoard';
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router,
Routes,
Route } from 'react-router-dom';

function App() {


  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/board' element={<DogBoard />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
