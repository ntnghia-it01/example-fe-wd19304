import {useForm} from 'react-hook-form';

const RegsiterHookForm = () => {
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
  } = useForm({
    defaultValues: {
      username: "abc",
      password: "123455"
    }
  });

  // Thêm 2 trường dữ liệu
  // Radio button giới tính
  // Input file hình ảnh

  // Thực hiện kiểm tra
  // Giới tính bắt buộc chọn
  // Hình ảnh: Dùng hàm validate bên trong register
  // + Bắt buộc chọn hình ảnh
  // + Định dạng ảnh phải là jpg || jpge || png || webp
  // + Kích thước tối đa của ảnh là 10MB

  const handleRegister = (props)=>{
    console.log("Register props === ", props)
  }

  const validateAvatar = (props)=>{
    console.log("Avatar props === ", props)

    // Chưa chọn ảnh
    if(props){
      return "Ảnh bắt buộc chọn";
    }

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
            // Giá trị của value phải khác nhau
            // register của useForm phải giống nhau hoàn toàn
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
          {...register("avatar", {
            validate: validateAvatar
          })}
        />
      </div>
      

      <button onClick={handleSubmit(handleRegister)} type="button" class="btn btn-primary">
        Add
      </button>
    </div>
  );
};

export default RegsiterHookForm;
