import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <h1 className="visually-hidden">brainblox</h1>
      <main className="wrapper">
        <Routes>
          <Route path="*" element={<h1> 404 - Not found page</h1>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
