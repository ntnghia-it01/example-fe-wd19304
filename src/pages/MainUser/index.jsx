import HeaderUser from '../../components/HeaderUser';
import FooterUser from '../../components/FooterUser';
import {Outlet, useNavigate} from 'react-router'
import { useEffect } from 'react';
import {useCookies} from 'react-cookie'
import Constanst from '../../Constanst';

// Layout
const MainUser = ()=>{
  const navigate = useNavigate();
  const [
    cookies,
    setCookie,
    removeCookie
  ] = useCookies([Constanst.COOKIE_TOKEN, Constanst.COOKIE_ROLE])

  useEffect(()=>{
    // Kiểm tra token có tồn tại ở cookie hay không
    // Và Role có bằng 1 hay không
    // Nếu không thì chuyển về trang login

    const token = cookies[Constanst.COOKIE_TOKEN];
    const role = cookies[Constanst.COOKIE_ROLE];

    if(!token || role != 1){
      navigate(Constanst.ROUTE.LOGIN)
    }

  }, []);

  return (
    <>
      <HeaderUser/>
      <Outlet/>
      <FooterUser/>
    </>
  )
};

export default MainUser;