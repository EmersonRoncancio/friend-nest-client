import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export const ProtectedAuth = () => {
  const cookie = Cookies.get('accesHome');

  const redirected = useNavigate();
  useEffect(() => {
    console.log(cookie);
    if (!cookie) return redirected('/');
  }, []);

  return <Outlet />;
};
