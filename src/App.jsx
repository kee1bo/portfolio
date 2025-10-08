import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/common/Navigation/Navigation';
import Footer from './components/common/Footer/Footer';
import HomePage from './components/pages/HomePage';
import AllProjectsPage from './components/pages/AllProjectsPage';
import BlogPostPage from './components/pages/BlogPostPage';
import NotFound from './components/pages/NotFound';
import configData from './data/config.json';
import profileData from './data/profile.json';

function App() {
  return (
    <Router>
      <Navigation sections={configData.sections} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<AllProjectsPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer social={profileData.social} />
    </Router>
  );
}

export default App;
