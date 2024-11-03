import { Route, Routes } from 'react-router-dom';
import { RegisterUser } from './routes/auth/RegisterUser';
import { Login } from './routes/auth/Login';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<RegisterUser />} />
    </Routes>
  );
}
