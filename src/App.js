import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import GraphForm from './components/GraphForm';
import GraphListing from './components/GraphListing';
import GraphDetail from './components/GraphDetail';
import 'bootstrap/dist/css/bootstrap.min.css';


 function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/graph-form" element={<GraphForm />} />
          <Route path="/graphs-listing" element={<GraphListing />} />
          <Route path="/GraphDetail/:id" element={<GraphDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
