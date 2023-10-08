import { useEffect } from "react";
import { Route,Redirect, useParams } from "react-router-dom";
import Dashboard from "./dashboard";
import Home from "./Home/home";





const Protect = (props) => {

const isAuth=localStorage.getItem('token');

useEffect(()=>{
console.log(props.id);
},[])
 
 
 
    return ( 
       
            isAuth? <Dashboard/> :<Home /> 
        
     );
}
 
export default Protect;