import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesList from './pages/ArticlesList';
import ArticlePage from './pages/ArticlePage';
import NavBar from './NavBar/NavBar';

import './App.css';

function App() {
  return (
    <Router> 
      <NavBar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="about" element={<AboutPage/>}/>
          <Route path="articles-list" element={<ArticlesList/>}/>
          <Route path="article" element={<ArticlePage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
