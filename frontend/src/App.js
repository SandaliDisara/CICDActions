import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllUser from './Components/AllUser';
import SingleUser from './Components/SingleUser';

export default function App() {
  return (
    <Router>
      <div>
        <h1>Hello World</h1>
        <Routes>
          <Route path='/' element={<AllUser />} />
          <Route path='/user/:userId' element={<SingleUser />} />
        </Routes>
      </div>
    </Router>
  );
}
