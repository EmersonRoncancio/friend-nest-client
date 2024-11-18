import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import { envs } from '../../envs';

export const ProtectedAuth = () => {
  const [loading, setLoading] = useState(false);
  const cookie = Cookies.get('accesHome');

  const redirected = useNavigate();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${envs.API}/auth/validateToken/${cookie}`)
      .then(() => {})
      .catch(() => {
        redirected('/');
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading ? (
        <div
        // className={css({
        //   display: 'flex',
        //   justifyContent: 'center',
        //   alignItems: 'center',
        //   width: '100%',
        //   height: '100vh',
        //   bgGradient: 'to-r',
        //   gradientFrom: 'blue.400',
        //   gradientTo: 'blue.100',
        // })}
        >
          <span className="loader"></span>
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};
