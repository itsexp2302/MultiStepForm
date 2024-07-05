// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MultiStepForm from './components/MultiStepForm';
import Posts from './components/Posts';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MultiStepForm/>} />
        <Route path="/posts" element={<Posts/>} />
      </Routes>
    </Router>
  );
}

export default App;
