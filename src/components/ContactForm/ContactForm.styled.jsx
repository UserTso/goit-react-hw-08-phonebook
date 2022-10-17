import styled from '@emotion/styled';
import { Form, Field } from 'formik';



export const Wrapper = styled.div`
display: flex;
justify-content: center;
`;

export const Forma = styled(Form)`
display: flex;
flex-direction: column;
width: 500px;
margin-left: auto;
margin-right: auto;
`;

export const LabelForm = styled.label`
display: flex;
/* justify-content: space-between; */
flex-direction: column;
margin-bottom: 15px;

&:last-child {margin-bottom: 0}
`;

export const ErrorText = styled.p`
color: red;
`;

export const Span = styled.span`
display: flex;
align-items: center;
margin-right: auto;
font-size: 20px;
height: 40px;
color: rgba(0, 0, 0, 0.6);
`;

export const InputForm = styled(Field)`
border: 1px solid transparent;
margin-left: 5px;
height: 40px;
`;

export const Button = styled.button`
margin-right: auto;
margin-left: auto;
width: 130px;
height: 40px;
font-size: 20px;
border-radius: 4px;
color: white;
background-color: #0231fbf7;
border: 1px solid transparent;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
`;
