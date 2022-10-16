import { UserMenu } from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { getIsLoggedin } from 'redux/auth/authSelectors';

export function Layout() {
  const isLoggedIn = useSelector(getIsLoggedin);
  return (
    <>
      <header>
        <nav>
          <NavLink end to="/">
            Home
          </NavLink>
          {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <>
              <NavLink to="/login">Log in</NavLink>
              <NavLink to="/register">Register</NavLink>
            </>
          )}
        </nav>
      </header>
      <main>
        <Suspense fallback={'Loading...'}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
