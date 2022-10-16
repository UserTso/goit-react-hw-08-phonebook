import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { Home } from '../../Pages/Home/Home';
import { PageContact } from '../../Pages/PageContact/PageContact';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import { PageLogin } from '../../Pages/PageLogin/PageLogin';
import { PageRegister } from '../../Pages/PageRegister/PageRegister';
import { useDispatch, useSelector } from 'react-redux';
import { getIsFetchingCurrentUser } from 'redux/auth/authSelectors';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { useEffect } from 'react';
import { PublicRoute } from 'components/PublicRoute/PublicRoute';

export function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    isFetchingCurrentUser && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="contacts"
            element={
              <PrivateRoute redirect="/login">
                <PageContact />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="login"
            element={
              <PublicRoute restricted redirect="/contacts">
                <PageLogin />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="register"
            element={
              <PublicRoute restricted redirect="/contacts">
                <PageRegister />
              </PublicRoute>
            }
          ></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Route>
      </Routes>
    )
  );
}
