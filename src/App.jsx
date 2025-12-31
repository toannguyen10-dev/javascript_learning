import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import EventLoop from './pages/EventLoop';
import ESFeatures from './pages/ESFeatures';
import Bundling from './pages/Bundling';
import Quiz from './pages/Quiz';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event-loop" element={<EventLoop />} />
          <Route path="/es-features" element={<ESFeatures />} />
          <Route path="/bundling" element={<Bundling />} />
          <Route path="/quiz/:topic" element={<Quiz />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
