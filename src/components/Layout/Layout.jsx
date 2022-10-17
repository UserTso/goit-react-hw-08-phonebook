import { UserMenu } from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { getIsLoggedin } from 'redux/auth/authSelectors';
import {Container, Header, HeaderNav, AuthNav, Span, Main} from './Layout.styled';

export function Layout() {
  const isLoggedIn = useSelector(getIsLoggedin);
  return (
    <Container>
      <Header>
        <HeaderNav>
          <NavLink end to="/" >
            <Span>Home</Span>
          </NavLink>
          {isLoggedIn && <NavLink to="/contacts"><Span>Contacts</Span></NavLink>}
          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <AuthNav>
              <NavLink to="/login"><Span>Log in</Span></NavLink>
              <NavLink to="/register"><Span>Registration</Span></NavLink>
            </AuthNav>
          )}
        </HeaderNav>
      </Header>
      <Main>
        <Suspense fallback={'Loading...'}>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
}
