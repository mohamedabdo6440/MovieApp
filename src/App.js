
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Nowplay from './Nowplay/Nowplay';
import Toprate from './Toprate/Toprate';
import Notfound from './Notfound/Notfound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <BrowserRouter >

        <Routes>

          <Route path="/" element={<Nowplay />} />
          <Route path="/nowplay" element={<Nowplay />} />
          <Route path="/toprate" element={<Toprate />} />
          <Route path="*" element={<Notfound />} />

        </Routes>

        <Sidebar />
      </BrowserRouter >



    </div>
  );
}

export default App;
