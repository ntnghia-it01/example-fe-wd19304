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