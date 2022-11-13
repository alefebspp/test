import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import RegisterEmployee from './pages/RegisterEmployee';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/register" element={<RegisterEmployee />} />
    </Routes>
  );
};

export default AppRoutes;
