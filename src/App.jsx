import './App.css'
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <> 
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
