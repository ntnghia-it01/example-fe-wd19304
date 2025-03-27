import HeaderAdmin from '../../components/HeaderAdmin';
import FooterAdmin from '../../components/FooterAdmin';

const Products = ()=>{
  return(
    <>
      {/* // Thêm components Header vào đây */}
      <HeaderAdmin/>
      <div className="p-3">
        <h1>Products</h1>
      </div>
      <FooterAdmin/>
      {/* // Thêm components Footer vào đây */}
    </>
  )
};

export default Products;