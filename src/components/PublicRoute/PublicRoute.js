import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsLoggedin } from "redux/auth/authSelectors";

export function PublicRoute({children, restricted=false, redirect='/'}) {
    const isLoggedin = useSelector(getIsLoggedin);
    const isNavigate = isLoggedin && restricted;
    return (
        isNavigate ? <Navigate to={redirect}/> : children
    )
}