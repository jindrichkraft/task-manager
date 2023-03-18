import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';

import './styles/reset.scss';

const App = (): JSX.Element => (
  <Routes>
    <Route path="/" element={<HomePage />} />
  </Routes>
);

export default App;
