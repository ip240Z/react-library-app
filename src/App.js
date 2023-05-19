import logo from './logo.svg';
import './App.css';
import Library from './components/Library';
import { Route, Routes, NavLink } from 'react-router-dom';
import Shelf from './components/Shelf';
import NoMatch from './components/NoMatch';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={<Library/>} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
