import { useDispatch, useSelector } from "react-redux"
import { getUserName } from '../../redux/auth/authSelectors';
import {logOut} from '../../redux/auth/authOperations';
import {WrapperLogout, Text, Button} from './UserMenu.styled';


export function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(getUserName);
    return(
    <WrapperLogout>
    <Text>Hello {name}</Text>
    <Button type="button" onClick={()=>dispatch(logOut())}>Logout</Button>
    </WrapperLogout>
    )
}