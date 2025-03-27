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

export default App;
