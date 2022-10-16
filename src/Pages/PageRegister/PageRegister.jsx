import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/authOperations";

export function PageRegister() {

 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const dispatch = useDispatch();

    const handleChange = ({target: {name, value}}) => {
       switch(name) {
        case 'name':
            setName(value)
        break;
        case 'email':
            setEmail(value)
            break;
            case 'password':
                setPassword(value)
            break;
            default:
                break;
       }
    } 

    const handleSubmit =(event) => {
        event.preventDefault();
        dispatch(register({name, email, password}));
        setName('');
        setEmail('');
        setPassword('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>name
    <input type="text" name="name" onChange={handleChange} value={name} />
</label>
<label>mail
    <input type="email" name="email" onChange={handleChange} value={email}/>
</label>
<label>password
    <input type="password" name="password" onChange={handleChange} value={password}/>
</label>
<button type="submit">Registration</button>
        </form>
    )
}