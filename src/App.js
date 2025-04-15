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

      {/* Chứa những trang không cần đăng nhập có thể truy cập */}
      <Route path="/">
        <Route path="login"  element={<Login/>}/>
        <Route path="register"  element={<Login/>}/>
      </Route>

      {/* Chứa những trang cần đăng nhập với vai trò là user */}
      <Route path="/user" element={<MainUser/>}>
        <Route path="info"  element={<h1>User info</h1>}/>
        <Route path="cart"  element={<h1>User info</h1>}/>
        <Route path="order"  element={<h1>User info</h1>}/>
      </Route>

      {/* Chứa những trang cần đăng nhập với vai trò là admin */}
      <Route path="/admin">
        <Route path="dashboard"  element={<Users/>}/>
        <Route path="users"  element={<Users/>}/>
        <Route path="products"  element={<Users/>}/>
      </Route>
    </Routes>
  );
};

// Tạo 1 trang Đăng ký với url /register
// username, password, name, class (dropdown: WD19301 -> WD19304)

export default App;
