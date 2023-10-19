import './App.css'
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DestinationPage } from './Pages/DestinationPage';
import { ArticlePage } from './Pages/ArticlePage';

function App() {

  return (
    <> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destination" element={<DestinationPage />} />
        <Route path="/articles" element={<ArticlePage />} />
      </Routes>
    </>
  )
}

export default App
