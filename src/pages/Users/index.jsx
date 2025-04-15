import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router";
import Constanst from "../../Constanst";
import {useCookies} from 'react-cookie'

const Users = () => {
  const [
    cookies,
    setCookie,
    removeCookie
  ] = useCookies(["token", "role"]);
  const [data, setData] = useState([]);

  // http://172.16.18.45:8080/auth/users

  // Không được ở async và await bên trong useEffect
  useEffect(() => {
    // const res = await axios.get("http://172.16.18.45:8080/auth/users")
    // console.log("Response === ", res);
    // console.log("abc");

    // Dùng axios gọi api
    // Set response từ api vào biến data
    // async await
    // axios.get("http://172.16.18.45:8080/auth/users")
    // .then(res =>{
    //   // Gọi api thành công
    //   console.log("Response === ", res);
    // })
    // .catch(e=>{
    //   // Gọi api lỗi
    //   console.log("Error === ", e);
    // });

    // console.log("abc");
    getData();
  }, []);

  const getData = async () => {
    try {
      // Lấy giá trị token từ cookie
      // Truyền token vào header của api

      const token = cookies.token

      const res = await axios.get(`${Constanst.DOMAIN_API}/auth/users`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log("Response === ", res.data.data);
      console.log("abc");

      setData(res.data.data);
    } catch (e) {
      console.log("Error === ", e);
    }
  };

  const imageStyle = { width: "100px", height: "100px" };

  const renderUser = (value, index) => {
    return (
      <tr key={index}>
        <td>{value.id}</td>
        <td>{value.username}</td>
        <td>{value.name}</td>
        <td>{value.gender == 0 ? "Male" : "Female"}</td>
        <td>
          <img
            src={`${Constanst.DOMAIN_API}/${value.avatar}`}
            style={imageStyle}
          />
        </td>
        <td>{value.role == 0 ? "Admin" : "User"}</td>
        <td>
          {/* Click vào nút cập nhật */}
          {/* Thực hiện chuyển trang */}
          {/* /register-hook-form?id=123 */}
          {/* Query params */}
          <Link to={`/register-hook-form?id=${value.id}`} type="button" class="btn btn-warning me-3">
            Update
          </Link>
          <button onClick={deleteUser.bind(this, {id: value.id, name: value.name})} type="button" class="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    );
  };

  // Tạo 1 hàm xoá user có giá trị đầu vào là id user
  // click nút xoá gọi hàm này
  // Trong hàm thực hiện gọi api xoá user
  // Sau khi xoá xong thực hiện reload lại danh sách user

  const deleteUser = async (props) =>{
    try{
      const {id, name} = props;
      let formData = new FormData();
      formData.append("id", id);

      await axios.delete(`${Constanst.DOMAIN_API}/auth/delete-user`, {data: formData});

      getData();
    }catch(e){
      console.log(e)
    }
  }

  // Làm thêm 1 nút Thêm user
  // Click vào chuyển trang register có bắt lỗi bằng hook form

  return (
    <div className="container">
      <Link to={"/register-hook-form"} className="btn btn-primary mb-3">
        Add user
      </Link>
      <div class="table-responsive">
        <table class="table table-primary">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Username</th>
              <th scope="col">Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Avatar</th>
              <th scope="col">Role</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>{data.map(renderUser)}</tbody>
        </table>
      </div>

      {/* Giao diện header table */}
      {/* tbody */}
      {/* data.map() */}
    </div>
  );
};

export default Users;
