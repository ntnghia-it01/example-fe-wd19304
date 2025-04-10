import {useForm} from 'react-hook-form';
import {
  useNavigate,
  // /register-hook-form?id=123 => Query params
  useSearchParams,
  // /register-hook-form/123 => Path params
  useParams
} from 'react-router'
import axios from 'axios';
import { useEffect } from 'react';
import Constanst from '../../Constanst';

// Sử dụng thư viện react-router
// Lấy giá trị của id trên url
// log ra

const RegsiterHookForm = () => {
  const navigate = useNavigate();
  const [queryParams, setQueryParams] = useSearchParams()
  const {
    register,
    formState: {errors}, // Dùng errors là biến để hiện thị lên giao diện
    handleSubmit, // Khi gọi hàm này sẽ kích hoạt validate
    // Nếu có lỗi thì errors sẽ hiển thị lên giao diện
    // Nếu không có lỗi thì nó sẽ gọi đến hàm handleRegister
    // và truyền giá trị được nhập trong những ô input
    // vào props

    reset, // Clear form => xoá bỏ tất cả dữ liệu của form
    getValues, // getValues() => trả về 1 Object là giá trị của 
    // tất cả các ô input mà đã đăng ký 
    setValue, // setValue("username", "abc")
  } = useForm();

  useEffect(()=>{
    console.log("value id === ", queryParams.get("id"))

    // Nếu có id tồn lại => Sửa
    // Gọi api get user info theo id
    // Sau khi gọi xong có response
    // Lấy giá trị của response gán vào những ô input tương ứng (setValue)
    if(queryParams.get("id")){
      getUserInfo();
    }
  }, [])

  const getUserInfo = async () =>{
    try{
      const res = await axios.get(`${Constanst.DOMAIN_API}/auth/user?id=${queryParams.get("id")}`)
      // Dùng setValue để gán giá trị
      // username, name, gender

      // setValue("username", "abc")
      // username => key đăng ký trong ô input
      // abc => giá trị tương ứng từ res trả về

      setValue("username", res.data.data.username)
      setValue("name", res.data.data.name)
      // setValue("gender", String(res.data.data.gender))
      // setValue("gender", res.data.data.gender + "")
      setValue("gender", `${res.data.data.gender}`)
    }catch(e){
      console.log(e)
    }
  }

  // Thêm 2 trường dữ liệu
  // Radio button giới tính
  // Input file hình ảnh

  // Thực hiện kiểm tra
  // Giới tính bắt buộc chọn
  // Hình ảnh: Dùng hàm validate bên trong register
  // + Bắt buộc chọn hình ảnh
  // + Định dạng ảnh phải là jpg || jpge || png || webp
  // + Kích thước tối đa của ảnh là 10MB

  const handleRegister = async (props)=>{
    try{
      // Kiểm tra nếu có tồn tại id ở url
      // => Chức năng sửa
      // Thực hiện gọi API sửa
      // Sau khi sửa xong chuyển về danh sách users
      // Dừng thực thi hàm handleRegister
      if(queryParams.get("id")){
        let formData = new FormData();
        formData.append("username", props.username)
        formData.append("password", props.password)
        formData.append("name", props.name)
        formData.append("gender", props.gender)
        // post 1 file
        formData.append("avatar", props.avatar[0])
        formData.append("id", queryParams.get("id"))

        // Post nhiều
        // props.avatar.length => Số lượng file
        // for(let index = 0; index < props.avatar.length; index++){
        //   formData.append(`avatar[${index}]`, props.avatar[index])
        // }

        await axios.put(`${Constanst.DOMAIN_API}/auth/update-user`, formData)

        navigate("/users")

        return;
      }

      // Thêm
      console.log("Register props === ", props)
      // props.username => input username
  
      let formData = new FormData();
      // formdData.append("key", "value")
      formData.append("username", props.username)
      formData.append("password", props.password)
      formData.append("name", props.name)
      formData.append("gender", props.gender)
      formData.append("avatar", props.avatar[0])
  
      const res = await axios.post(`${Constanst.DOMAIN_API}/auth/add-user`, formData)
      console.log("success == ", res)

      // Sau khi thêm thành công
      // Chuyển về trang danh sách users
      // Và phải có thông tin user vừa được thêm
      // react-router

      // window.location.href = "/users"

      navigate("/users");
    }catch(e){
      console.log("error === ", e);
    }
  }

  // Số lượng ảnh tối thiểu là 3
  // Tất cả các ảnh phải thuộc danh mục định dạng
  // const types = [
  //     "image/jpg",
  //     "image/jpeg",
  //     "image/png",
  //     "image/webp"
  //  ];
  // Kích thước của mỗi ảnh không được lớn hơn 15MB

  // const validateAvatar = (props)=>{
  //   console.log("Avatar props === ", props)

  //   if(props.length < 3){
  //     return "Số lượng tối thiểu 3 ảnh";
  //   }

  //   const types = [
  //     "image/jpg",
  //     "image/jpeg",
  //     "image/png",
  //     "image/webp"
  //   ];
  //   const maxSize = 1024 * 1024 * 15;

  //   for(let index = 0; index < props.length; index++){
  //     if(!types.includes(props[index].type)){
  //       return "Ảnh không đúng định dạng";
  //     }

  //     if(props[index].size > maxSize){
  //       return "Kích thước ảnh quá lớn";
  //     }
  //   }

  //   return true;
  // }

  const validateAvatar = (props)=>{
    console.log("Avatar props === ", props)

    // Chưa chọn ảnh
    if(props.length == 0){
      return "Ảnh bắt buộc chọn";
    }

    // props[0].type => image/png || image/jpg Giá trị của type
    // jpg || jpge || png || webp || gif danh mục bắt buộc
    // kiểm tra nếu type không nằm trong ds danh mục thì báo lỗi
    // Tạo ra 1 mảng types
    const types = [
      "image/jpg",
      "image/jpeg",
      "image/png",
      "image/webp"
    ];

    if(!types.includes(props[0].type)){
      return "Ảnh sai định dạng";
    }

    // Kích thước tối đa của ảnh là 10MB
    // props[0].size => Kích thước của ảnh (byte)
    // Đổi 10MB => ? byte
    const maxSize = 1024 * 1024 * 10;

    if(props[0].size > maxSize){
      return "Kích thước không hợp lệ"
    }

    // 4 ngày => milisecond
    // 1000 * 60 * 60 * 24 * 4
    
    // Nếu định dạng ảnh không phải các loại trên
    // return "Sai định dạng ảnh"; <=> message: "Sai định dạng ảnh"

    // Lấy thông tin của file => props[0]

    // props[0].type so sánh với danh sách định dạng trên
    // nếu lỗi return "Sai định dạng";

    return true; // Không xảy ra lỗi ở file avatar
    // return "abc"; Xảy ra lỗi và lỗi sẽ được hiển nội dung
    // của return
  }

  return (
    <div className="col-6 offset-3">
      <div class="mb-3">
        <label for="" class="form-label">
          Username
        </label>
        <input 
          type="text" 
          class="form-control" 
          placeholder="Username"
          {...register("username", {
            required: {value: true, message: "Username required!"},
          })}
        />
        {errors['username'] && <small className='text-danger'>{errors['username']['message']}</small>}
        {/* {errors.username && <small className='text-danger'>{errors.username.message}</small>} */}
      </div>

      <div class="mb-3">
        <label for="" class="form-label">
          Password
        </label>
        <input 
          type="text" 
          class="form-control" 
          placeholder="Password"
          {...register("password", {
            required: {value: true, message: "Password required!"},
            minLength: {value: 6, message: "Password min length 6"}
          })}
        />
        {errors['password'] && <small className='text-danger'>{errors['password']['message']}</small>}
      </div>

      <div class="mb-3">
        <label for="" class="form-label">
          Name
        </label>
        <input 
          type="text" 
          class="form-control" 
          placeholder="Name" 
          {...register("name", {
            required: {value: true, message: "Name required!"}
          })}  
        />
        {errors['name'] && <small className='text-danger'>{errors['name']['message']}</small>}
      </div>

      <div class="mb-3">
        <label for="" class="form-label">
          Class
        </label>
        <select class="form-select form-select-lg"
          {...register("className", {
            required: {value: true, message: "Class name required!"},
            min: {value: 1, message: "Class name required!"}
          })}
        >
          <option selected value="-1">----------Select Class----------</option>
          <option value="1">WD19301</option>
          <option value="2">WD19302</option>
          <option value="3">WD19303</option>
          <option value="4">WD19304</option>
        </select>
        {errors['className'] && <small className='text-danger'>{errors['className']['message']}</small>}
      </div>

      <div class="mb-3">
        <label for="" class="form-label">
          Gender
        </label>
        <br/>

        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            value="0"
            {...register("gender", {
              required: {value: true, message: "Gender required"}
            })}
          />
          <label class="form-check-label" for="">Male</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            value="1"
            {...register("gender", {
              required: {value: true, message: "Gender required"}
            })}
          />
          <label class="form-check-label" for="">Female</label>
        </div>
      </div>

      <div class="mb-3">
        <label for="" class="form-label">Avatar</label>
        <input
          type="file"
          class="form-control"
          aria-describedby="fileHelpId"
          multiple
          {...register("avatar", {
            validate: validateAvatar
          })}
        />
        {errors['avatar'] && <small className='text-danger'>{errors['avatar']['message']}</small>}
      </div>
      

      <button onClick={handleSubmit(handleRegister)} type="button" class="btn btn-primary">
        {queryParams.get("id") ? "Update" : "Add"}
      </button>
      {/* có id là "Update" <> "Add" */}
    </div>
  );
};

export default RegsiterHookForm;
