import './App.css'
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScholarshipDetail from "./Pages/ScholarshipDetail.jsx";

function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/scholarship-detail" element={<ScholarshipDetail />} />
      </Routes>
    </>
  )
}

export default App
