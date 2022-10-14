/** @format */

import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AllUsers from "./AllUsers";
import AddUser from "./AddUser";
const App =()=> {
  return (
    <Router>
    <div className='App-header'>
      <Navbar />
    </div>
    <div className="container mt-3">
      {/* add route add and get user */}
      <Routes>
        <Route path="/all" element={<AllUsers />} />
        <Route path="/add" element={<AddUser />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
