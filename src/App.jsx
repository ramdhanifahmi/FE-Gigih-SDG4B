import './App.css'
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DestinationPage } from './Pages/DestinationPage';
import { ArticlePage } from './Pages/ArticlePage';
import { ArticleDetail } from './Pages/ArticleDetail';
import { AboutPage } from './Pages/AboutPage';

function App() {

  return (
    <> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destination" element={<DestinationPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/articles" element={<ArticlePage />} />
        <Route path="/articles/:id" element={<ArticleDetail />} />
      </Routes>
    </>
  )
}

export default App
