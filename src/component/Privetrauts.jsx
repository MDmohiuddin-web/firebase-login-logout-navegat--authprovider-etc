import { useContext } from "react";
import { AuthContext } from "../Provaider/Authprovaider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";


const Privetrauts = ({children}) => {
    const {user,loding}=useContext(AuthContext)
    if(loding){
        return <span className="loading loading-ring loading-lg"></span>
    }
    if(user){
        return children;
    }
    return <Navigate to='login'></Navigate>;
};

export default Privetrauts;


Privetrauts.propTypes = {
    children: PropTypes.node,
  };