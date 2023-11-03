import './App.css'
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScholarshipDetail from "./Pages/ScholarshipDetail.jsx";
import ScholarshipList from "./Pages/ScholarshipList.jsx";

function App() {

  return (
      <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
          <Routes >
              <Route path="/" element={<HomePage />} />
              <Route path="/scholar" element={<ScholarshipList />} />
              <Route path="/scholar/:slug" element={<ScholarshipDetail />} />
          </Routes>
      </div>
  )
}

export default App
