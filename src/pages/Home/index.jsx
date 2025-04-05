import { Link } from 'react-router';
import {
  useState, //Quản lý biến
  useEffect, //Quản lý vòng đời của components
  // Gợi ý nghiên cứu thêm
  useCallback,
  useReducer,
  useRef,
  useMemo,
  useContext
} from 'react'

const Home = ()=>{
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  // Được kích hoạt ít nhất 2 lần
  // Lần 1: Khi components được khởi tạo
  // Lần 2: Khi components render thành công
  // Hàm này được khi kích hoạt khi:
  // + Bất kỳ state/props nào bên trong components thay đổi
  // + Khi components được render lại
  useEffect(()=>{
    console.log("use effect");
    // Không được setState bên trong
    // setCount(count + 1);
  });

  // Được kích hoạt duy nhất 2 lần
  // Lần 1: Khi components được khởi tạo
  // Lần 2: Khi components render thành công
  // Call API, set default value
  useEffect(()=>{
    console.log("use effect 2");
  }, []);


  // Được kích hoạt ít nhât 1 lần
  // Khi components được khởi tạo
  // Và mỗi khi giá trị của biến count thay đổi
  useEffect(()=>{
    console.log("use effect 3");
  }, [count]);

  // Được kích hoạt ít nhât 1 lần
  // Khi components được khởi tạo
  // Và mỗi khi giá trị của biến count/message thay đổi
  useEffect(()=>{
    console.log("use effect 4");
  }, [count, message]);
  // Số lượng biến (state) lắng nghe không giới hạn

  return(
    <div className="p-3">
      <h1>Home</h1>
      <Link className='btn btn-primary' to={"/login"}>Login</Link>
    </div>
  )
};

export default Home;