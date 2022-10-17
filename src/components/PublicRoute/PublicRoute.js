import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsLoggedin } from "redux/auth/authSelectors";

export function PublicRoute({children, restricted=false, redirect='/'}) {
    console.log(typeof restricted)
    const isLoggedin = useSelector(getIsLoggedin);
    const isNavigate = isLoggedin && restricted;
    return (
        isNavigate ? <Navigate to={redirect}/> : children
    )
}

PublicRoute.propTypes = {
    children:PropTypes.object.isRequired,
    redirect:PropTypes.string,
    restricted:PropTypes.bool,
  };