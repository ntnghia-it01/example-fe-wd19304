import "./style.css"
const Status = (props) =>{
  const {type} = props;
  let title = "";
  let color = "green"
  switch(type){
    case 1:
      title = "Đang theo học";
      color = "green"
      break;
    case 2:
      title = "Đã thôi học";
      color = "red"
      break;
    case 3:
      title = "Đã tốt nghiệp";
      color = "blue"
      break;
    case 4:
      title = "Đã chuyển lớp";
      color = "orange"
      break;
    case 5:
      title = "Đã chuyển trường";
      color = "black"
      break;
    default:
      title = "Đang theo học";
      color = "green"
      break;
  }


  let styleColor = {
    container: {
      borderColor: color
    },
    dot: {
      backgroundColor: color
    },
    title: {
      color: color
    }
  };
  
  return (
    <div className="status-container" style={styleColor.container}>
      <div className="dot" style={styleColor.dot}/>
      <p className="title" style={styleColor.title}>{title}</p>
    </div>
  )
}

export default Status;