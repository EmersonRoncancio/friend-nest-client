import { Route, Routes } from 'react-router-dom';
import { RegisterUser } from './routes/auth/RegisterUser';
import { Login } from './routes/auth/Login';
import { ProtectedAuth } from './routes/auth/ProtectedAuth';
import { Home } from './routes/pages/Home';
import { Prueba } from './routes/pages/Prueba';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {/* <Route path="/register" element={<RegisterUser />} />
      <Route element={<ProtectedAuth />}>
        <Route path="/home/*" element={<Home />} />
        <Route path="/prueba" element={<Prueba />} />
      </Route> */}
    </Routes>
  );
}
