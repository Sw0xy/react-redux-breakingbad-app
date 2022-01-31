import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Detail from './pages/Detail';
import Quotes from './pages/Quotes';
function App() {
  return (
    <div className="App">
     <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="characters/:char_id" element={<Detail />} />
        <Route path="quotes" element={<Quotes />} />
        
      
      </Routes>
    </div>
  );
}

export default App;
