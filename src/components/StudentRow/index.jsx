const StudentRow = (props)=>{
  const {code, name, isPass} = props
  return (
    <tr>
      <td>{code}</td>
      <td>{name}</td>
      <td className={isPass ? "text-success" : "text-danger"}>
        {isPass ? "Pass" : "Fail"}
      </td>
    </tr>
  )
}

export default StudentRow;




// Xây dựng 1 components Button có 2 props
// - title (Hiển thị nội dung bên trong Button)
// - type Dùng để phân loại giao diện Button
//     + "default" => hiển thị button primary
//     + "disable" => hiển thị button secondary
//     + "outline" => hiển thị button outline primary
//     + Không truyền vào type => hiển thị button primary