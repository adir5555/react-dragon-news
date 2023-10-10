import { useContext } from "react";
import { AuthContext } from "../providers/AuthProbiders";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const {user,looding} = useContext(AuthContext);

    const location = useLocation()
    console.log(location.pathname);

    if(looding){
        return <span className="loading loading-bars  loading-lg"></span>
    }
    if(user){
       return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivetRoute;