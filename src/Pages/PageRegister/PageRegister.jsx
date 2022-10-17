import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/authOperations";
import {WrapperRegister, Form, Label, Span, Input, Button} from './PageRegister.styled';

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
        <WrapperRegister>
            <Form onSubmit={handleSubmit}>
            <Label><Span>name</Span>
    <Input type="text" name="name" onChange={handleChange} value={name} />
</Label>
<Label><Span>mail</Span>
    <Input type="email" name="email" onChange={handleChange} value={email}/>
</Label>
<Label><Span>password</Span>
    <Input type="password" name="password" onChange={handleChange} value={password}/>
</Label>
<Button type="submit">Registration</Button>
        </Form>
        </WrapperRegister>
        
    )
}