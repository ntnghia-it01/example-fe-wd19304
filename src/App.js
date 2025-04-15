import logo from "./logo.svg";
import "./App.css";
import {
  Routes,
  Route
} from 'react-router'
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Products from './pages/Products';
import MainUser from "./pages/MainUser";
import Register from "./pages/Register";
import RegsiterHookForm from "./pages/RegsiterHookForm";
import Users from "./pages/Users";

const App = () => {

  // localhost:3000 => Home
  // localhost:3000/login => Login

  return (
    <Routes>
      <Route path="/" element={<MainUser/>}>
        {/* Khi người dùng mở vào url: localhost:3000/** */}
        {/* => MainUser */}
        {/* <Route index element={<Home/>}/> */}
        {/* Route con không có dấu / phía trước */}
        {/* <Route path="login"  element={<Login/>}/>
        <Route path="register"  element={<Register/>}/>
        <Route path="register-hook-form"  element={<RegsiterHookForm/>}/>
        <Route path="users"  element={<Users/>}/> */}
      </Route>

      <Route path="/login"  element={<Login/>}/>

      {/* Tạo 1 trang login. với url /login */}
      {/* Sử dụng react-hook-form bắt validate */}
      {/* Và lấy thông tin được nhập từ input */}
      {/* Thực hiện kiểm tra lỗi qua react-hook-form */}
      {/* Nếu có lỗi hiển thị lỗi */}
      {/* Nếu không lỗi hiển gọi api login */}
      {/* Sau khi gọi api login thành công */}
      {/* Log ra response từ api */}

      {/* Tạo 1 trang danh sách users */}
      {/* Dùng axios gọi api users */}
      {/* Hiển thị thông tin user ra 1 bảng */}
      {/* Dùng 1 biến state lưu mảng rỗng */}
      {/* Gọi api bên trong useEffect */}
      {/* Lấy giá trị response từ api set vào biến state */}
      {/* Dùng map với state để render ra giao diện */}
      {/* Gender == 0 => Male, gender == 1 => Female */}
      {/* Role == 0 => Admin, role == 1 => User */}

      {/* <Route path="/admin" element={<MainAdmin/>}> */}
        {/* <Route index element={<Dashboard/>}/> */}
        {/* Route con không có dấu / phía trước */}
        {/* <Route path="products"  element={<Products/>}/> */}
      {/* </Route> */}

      {/* <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/> */}
    </Routes>
  );
};

// Tạo 1 trang Đăng ký với url /register
// username, password, name, class (dropdown: WD19301 -> WD19304)

export default App;
