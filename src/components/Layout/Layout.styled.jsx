import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 1200px;
    margin-right: auto;
    margin-left: auto;
    background-color: white;
    height: 100vh;

`;

export const Header = styled.header`
    display: flex;
    width: 100%;
    height: 40px;
    justify-content: center;
    align-items: center;
    background-color: #1bbad9;

`;

export const HeaderNav = styled.nav`
    display: flex;
    justify-content: space-around;
    width: 100%;

`;

export const AuthNav = styled.div`
    display: flex;
    width: 300px;
    justify-content: space-between;
`;

export const Span = styled.span`
    display: flex;
justify-content: center;
align-items: center;
width: 130px;
height: 40px;
font-size: 20px;
border-radius: 4px;
color: white;
background-color: #0231fbf7;

`;

export const Main = styled.main`
display: block;
    height: 100vh;
`;