import './App.css'
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DestinationPage } from './Pages/DestinationPage';
import { ArticlePage } from './Pages/ArticlePage';
import { ArticleDetail } from './Pages/ArticleDetail';
import { AboutPage } from './Pages/AboutPage';
import ScholarshipDetail from "./Pages/ScholarshipDetail.jsx";
import ScholarshipList from "./Pages/ScholarshipList.jsx";

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
