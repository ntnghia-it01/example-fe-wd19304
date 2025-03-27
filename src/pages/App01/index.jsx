import { useState } from "react";
import StudentRow from "../../components/StudentRow";

const App01 = () => {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [point, setPoint] = useState(0);
  const [students, setStudent] = useState([
    {
      code: "PC123456",
      name: "Nguyen Van A",
      point: 7,
    },
  ]);

  const renderStudent = (value, index)=>{
    return <StudentRow code={value.code}
      name={value.name}
      isPass={value.point >= 5}/>
  }

  return (
    <div className="container">
      <div className="mt-5 col-6 offset-3">
        <div class="mb-3">
          <label for="" class="form-label">
            MSSV
          </label>
          <input type="text" class="form-control" placeholder="MSSV" />
        </div>

        <div class="mb-3">
          <label for="" class="form-label">
            Họ và tên
          </label>
          <input type="text" class="form-control" placeholder="Họ và tên" />
        </div>

        <div class="mb-3">
          <label for="" class="form-label">
            Điểm
          </label>
          <input type="text" class="form-control" placeholder="Điểm" />
        </div>

        <button type="button" class="btn btn-primary">
          Thêm
        </button>
      </div>

      <div class="table-responsive mt-5">
        <table class="table table-primary">
          <thead>
            <tr>
              <th scope="col">MSSV</th>
              <th scope="col">Họ và tên</th>
              <th scope="col">Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {students.map(renderStudent)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App01;
