import { useDispatch, useSelector } from "react-redux"
import { getUserName } from '../../redux/auth/authSelectors';
import {logOut} from '../../redux/auth/authOperations';


export function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(getUserName);
    return(
    <div>
    <p>Hello {name}</p>
    <button type="button" onClick={()=>dispatch(logOut())}>Logout</button>
    </div>
    )
}