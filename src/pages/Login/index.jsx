import HeaderUser from '../../components/HeaderUser';
import FooterUser from '../../components/FooterUser';

const Login = ()=>{
  return(
    <>
      {/* // Thêm components Header vào đây */}
      <HeaderUser/>
      <div className="p-3">
        <h1>Login</h1>
      </div>
      <FooterUser/>
      {/* // Thêm components Footer vào đây */}
    </>
  )
};

export default Login;