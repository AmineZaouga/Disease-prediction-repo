import './App.css';
import SignIn from './component/User/signIn';
import SignUp from './component/User/signUp';
import Home from './component/home';
import {Routes , Route } from "react-router-dom" ;
import Dashboard from './component/DashboardItems/dashboard';
import Articles from './component/DashboardItems/articles';

function App() {
  return (
    <div className="App">
        <Routes> 
            <Route path="/" element={<Home/> } /> 
            <Route path="/signIn" element={<SignIn/> } /> 
            <Route path="/signup" element={<SignUp/> } /> 
            <Route path="/dashboard" element={<Dashboard/> } /> 
            <Route path="/articles" element={<Articles/> } /> 
       </Routes> 
  
    </div>
  );
}

export default App;
