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
