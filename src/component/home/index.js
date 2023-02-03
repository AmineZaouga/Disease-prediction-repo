import SignIn from '../User/signIn';
import SignUp from '../User/signUp';
import Dashboard from '../DashboardItems/dashboard';
import { Link } from 'react-router-dom';  


function Home() {
  return (
    <div >
         
            
            <Link to="/signIn" >SignIn</Link>
            <Link to="/signUp" >SignUp</Link>
            <Link to="/dashboard" >Dashboard</Link>
  
    </div>
  );
}

export default Home;
