import axios from 'axios';
import {useForm} from 'react-hook-form'
import Constants from '../../Constanst'
import {useCookies} from 'react-cookie'
import {useNavigate} from 'react-router'

const Login = () => {
  // Biến chứa giá trị, hàm setter, hàm remove
  const [
    cookies,
    setCookie,
    removeCookie
  ] = useCookies(["token", "role"]);

  const navigate = useNavigate();

  const {
    register,
    // Đăng ký tên của từng ô input
    // Đăng các validate của từng ô input
    handleSubmit,
    // Khi được gọi sẽ thực hiện kiểm tra các lỗi validate
    // đã được gọi trước đó ở hàm register
    formState: {errors},
    // errors đóng vai trò như 1 biến state bên trong components
    // Errors chứa các lỗi mà handleSubmit sinh ra khi kiểm tra với các đăng ký
    // ở register
  } = useForm();

  // Hàm này là hàm callback
  // Nó sẽ được kích hoạt nếu form không phát sinh ra lỗi
  // Và props là nội mà người dùng đã nhập vào từng ô input theo kiểu object
  // {username: "abc", password: "abc"}
  const handleLogin = async (props) => {
    try{
      let formData = new FormData();
      formData.append("username", props.username)
      formData.append("password", props.password)

      const res = await axios.post(`${Constants.DOMAIN_API}/auth/login`, formData)
      // const res = await axios.delete(`${Constants.DOMAIN_API}/auth/login`, {data: formData})

      console.log(res.data);

      let expiresDate = new Date(); // Thời gian hiện tại
      expiresDate.setHours(expiresDate.getHours() + 10);

      // Key, value, config
      setCookie("token", res.data.data.token, {
        expires: expiresDate, // Thời gian hiện tại
        // Truyền vào thời gian sau 10h nữa
      })

      setCookie("role", res.data.data.role, {
        expires: expiresDate, // Thời gian hiện tại
        // Truyền vào thời gian sau 10h nữa
      })

      // Kiểm tra role
      // nếu role == 0 (Admin) => chuyển trang /admin/users
      // nếu role == 1 (User) => chuyển trang /user/info

      if(res.data.data.role == 0){
        navigate("/admin/users")
      }else{
        navigate("/user/info")
      }

    }catch(e){

    }
  }

  // JWT => user info
  // 

  // Lưu token ở localstorage => Lưu vĩnh viễn
  // Kiểm tra user có đăng nhập chưa => token != null
  // Có token mà token hết hạn?
  // Decode => Object => check thời gian hiện tại 
  // => biết hết hạn => logout => login



  // Token => hỏi thằng BE biết được thời gian hết hạn?
  // Dùng cookie lưu => cookie em có thể set thời gian hết
  // hạn cho cookie cùng lúc với thời gian hết hạn của jwt

  // Muốn biết đã đăng nhập hoặc token còn sử dụng được hay không?
  // Check token ở cookie có tồn tại không?

  // cài thư viện react-cookie
  // thực hiện lưu token vào cookie

  return (
    <div className="mt-5 col-6 offset-3">
      <div class="mb-3">
        <label class="form-label">Username</label>
        <input 
          type="text" 
          class="form-control" 
          {...register("username", {
            required: {value: true, message: "Username required"},
          })}
        />
        {errors.username && <small className='text-danger'>{errors.username.message}</small>}
      </div>
      <div class="mb-3">
        <label class="form-label">Password</label>
        <input 
          type="password" 
          class="form-control" 
          {...register("password", {
            required: {value: true, message: "Password required"},
          })}
        />
        {errors.password && <small className='text-danger'>{errors.password.message}</small>}
      </div>

      <button onClick={handleSubmit(handleLogin)} type="button" class="btn btn-primary">
        Login
      </button>
    </div>
  );
};

export default Login;
