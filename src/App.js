import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResultScreen from './screens/ResultScreen';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/result" element={<ResultScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
