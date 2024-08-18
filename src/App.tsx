import './App.scss';
import Workspace from './pages/Workspace';
import Header from './components/Header';
import { workspaces } from './assets/data.json';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <h1 className="visually-hidden">brainblox</h1>
      <main>
        <Routes>
          <Route path="/" element={<Workspace workspaces={workspaces} />} />
          <Route
            path="/workspaces"
            element={<Workspace workspaces={workspaces} />}
          />
          <Route path="*" element={<h1> 404 - Not found page</h1>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
