import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import { Route, Routes } from 'react-router-dom';
import Discover from './components/Discover/Discover';
import Collections from './components/Collections/Collections';
import Journal from './components/Journal/Journal';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" />
        <Route path="/journal" element={<Journal />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/discover" element={<Discover />} />
      </Routes>
    </div>
  );
}

export default App;
