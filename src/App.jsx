import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import AddAsset from './pages/AddAsset';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<AddAsset />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
