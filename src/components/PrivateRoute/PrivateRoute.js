import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsLoggedin } from "redux/auth/authSelectors";

export function PrivateRoute({children, redirect}) {
    const isLoggedin = useSelector(getIsLoggedin)
    return (
        <>
        {isLoggedin ? children : <Navigate to={redirect}/>}
        </>
    )
}



PrivateRoute.propTypes = {
    children:PropTypes.object.isRequired,
    redirect:PropTypes.string.isRequired,
  };
