import logo from "./logo.svg";
import "./App.css";
import StudentRow from "./components/StudentRow";
import {Button as ButtonBootstrap} from "react-bootstrap";
import Button from "./components/Button";
import Status from "./components/Status";

function App() {
  // Tạo ra 1 danh sách SV (MSSV, Họ và tên, Điểm)
  // Hiển thị danh sách SV ra 1 bảng
  // Xây dựng components TableRow chứa thông tin của SV
  // 3 cột
  // - MSSV
  // - Họ và tên
  // - Trạng thái (Nếu điểm >= 5 ? "Pass" : "Fail")

  const students = [
    {
      code: "PC12345",
      name: "Nguyen Van A",
      point: 8,
    },
    {
      code: "PC12346",
      name: "Nguyen Van B",
      point: 3,
    },
    {
      code: "PC12347",
      name: "Nguyen Van C",
      point: 9.25,
    },
  ];

  const renderStudent = (value, index)=>{
    return <StudentRow code={value.code}
      name={value.name}
      isPass={value.point >= 5}/>
  }

  return (
    <section className="container p-5">
      <div className="table-responsive">
        <table className="table table-primary">
          <thead>
            <tr>
              <th scope="col">Code</th>
              <th scope="col">Name</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map(renderStudent)}        
          </tbody>
        </table>
      </div>
      <Button title={"Test"}/>

      <br/>
      <br/>
      <Status/>
      <br/>
      <br/>
      <Status type={1}/>
      <br/>
      <br/>
      <Status type={2}/>
    </section>
  );
}

export default App;
