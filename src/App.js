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

const App = () => {

  // localhost:3000 => Home
  // localhost:3000/login => Login

  return (
    <Routes>
      <Route path="/" element={<MainUser/>}>
        {/* Khi người dùng mở vào url: localhost:3000/** */}
        {/* => MainUser */}
        <Route index element={<Home/>}/>
        {/* Route con không có dấu / phía trước */}
        <Route path="login"  element={<Login/>}/>
        <Route path="register"  element={<Register/>}/>
        <Route path="register-hook-form"  element={<RegsiterHookForm/>}/>
      </Route>

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
