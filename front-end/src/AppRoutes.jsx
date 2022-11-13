import { Routes, Route } from 'react-router-dom';
import EmployeeInfo from './components/Employee/EmployeeInfo';
import Main from './pages/Main';
import RegisterEmployee from './pages/RegisterEmployee';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/register" element={<RegisterEmployee />} />
      <Route path="/employee" element={<EmployeeInfo />} />
    </Routes>
  );
};

export default AppRoutes;
