import { Link } from 'react-router';

const Home = ()=>{
  return(
    <div className="p-3">
      <h1>Home</h1>
      <Link className='btn btn-primary' to={"/login"}>Login</Link>
    </div>
  )
};

export default Home;