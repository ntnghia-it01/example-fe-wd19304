
// Components == Func
// Func cần dữ liệu đầu vào là image, name, price 
// để hiển thị lên giao diện
// props => object
const ProductItem = (props)=>{
  const {name, img, price} = props;
  const styles = {
    img: {
      with: '100%',
      height: '250px'
    }
  }
  return (
    <div className="card">
      <img
        style={styles.img}
        className="card-img-top"
        src={img}
        alt="Card image cap"
      />
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">{price}</p>
      </div>
    </div>
  )
}

export default ProductItem;