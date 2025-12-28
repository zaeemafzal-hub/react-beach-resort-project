import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { Home } from './pages/Home';
import { Rooms } from './pages/Rooms';
import SingleRoomWrapper from "./pages/SingleRoom";
import { Error } from './pages/Error';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:slug" element={<SingleRoomWrapper />} />
          <Route path="*" element={<Error />} />
        </Routes>
      
    </Router>
  );
}

export default App;
