import {useState} from 'react'

const Register = () => {
  // Tạo 4 state và function để nhận dữ liệu khi người dung nhập thông tin
  // vào input và dropdown

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [className, setClassName] = useState("-1");

  const [errUsername, setErrUsername] = useState(null);
  const [errPassword, setErrPassword] = useState(null);
  const [errName, setErrName] = useState(null);
  const [errClassName, setErrClassName] = useState(null);

  const handleClick = ()=> {
    // if(username.trim() === ""){
    if(username.trim().length == 0){
      setErrUsername("Username Error!");
    }

    if(className == -1){ //TH1
    // if(className === "-1"){ //TH2
      setClassName("Class name error!");
    }
  }

  // Tạo 1 hàm nhận sự kiện click vào nút thêm
  // Thực hiện kiểm tra nội dung trong form
  // Username không được bỏ trống
  // Password không được bỏ trống và có ít nhất 6 ký tự
  // Name không được bỏ trống
  // Class bắt buộc chọn

  // Khi những lỗi này xảy ra sẽ được thông bên dưới ô input tương ứng

  // Tạo 1 hàm để nhận sự kiện sử lý
  // Tạo 4 state error giá trị mặc định là null, tương ứng 4 state giá trị 
  // Nếu error nào khác null thì hiển thị giá trị nó lên giao diện


  const handleChangeUsername = (props)=>{
    setUsername(props.target.value);
  }

  const handleChangePassword = (props)=>{
    setPassword(props.target.value);
  }

  const handleChangeName = (props)=>{
    setUsername(props.target.value);
  }

  const handleChangeClassName = (props)=>{
    setClassName(props.target.value);
  }

  return (
    <div className="col-6 offset-3">
      <div class="mb-3">
        <label for="" class="form-label">
          Username
        </label>
        <input onChange={handleChangeUsername} type="text" class="form-control" placeholder="Username" />
        {/* Nếu errUsername != null || errUsername != undefind || errUsername == true || errUsername != 0 */}
        {errUsername && <small className='text-danger'>{errUsername}</small>}
      </div>

      <div class="mb-3">
        <label for="" class="form-label">
          Password
        </label>
        <input onChange={handleChangePassword} type="text" class="form-control" placeholder="Password" />
      </div>

      <div class="mb-3">
        <label for="" class="form-label">
          Name
        </label>
        <input onChange={handleChangeName} type="text" class="form-control" placeholder="Name" />
      </div>

      <div class="mb-3">
        <label for="" class="form-label">
          Class
        </label>
        <select onChange={handleChangeClassName} class="form-select form-select-lg" name="" id="">
          <option selected value="-1">----------Select Class----------</option>
          <option value="1">WD19301</option>
          <option value="2">WD19302</option>
          <option value="3">WD19303</option>
          <option value="4">WD19304</option>
        </select>
      </div>

      <button onClick={handleClick} type="button" class="btn btn-primary">
        Add
      </button>
    </div>
  );
};

export default Register;
