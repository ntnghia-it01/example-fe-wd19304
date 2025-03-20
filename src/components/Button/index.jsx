// Xây dựng 1 components Button có 2 props
// - title (Hiển thị nội dung bên trong Button)
// - type Dùng để phân loại giao diện Button
//     + "default" => hiển thị button primary
//     + "disable" => hiển thị button secondary
//     + "outline" => hiển thị button outline primary
//     + Không truyền vào type => hiển thị button primary

const Button = (props)=>{
  const {title, type} = props;
  let className = "";
  // Dùng câu điều kiện để kiểm tra type === ?
  // type == default => className = "btn btn-primary"

  switch(type){
    case "default":
      className = "btn btn-primary";
      break;
    case "disable":
      className = "btn btn-secondary";
      break;
    case "outline":
      className = "btn btn-outline-primary";
      break;
    default:
      className = "btn btn-primary";
      break;
  }

  return(
    <button className={className}>{title}</button>
  )
}

export default Button;