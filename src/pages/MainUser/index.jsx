import HeaderUser from '../../components/HeaderUser';
import FooterUser from '../../components/FooterUser';
import {Outlet} from 'react-router'

// Layout
const MainUser = ()=>{

  return (
    <>
      <HeaderUser/>
      <Outlet/>
      <FooterUser/>
    </>
  )
};

export default MainUser;