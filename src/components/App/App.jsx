import { Navigate, Route, Routes } from 'react-router-dom';
import {lazy} from 'react';
import { Layout } from '../Layout/Layout';
import { Home } from '../../Pages/Home/Home';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { getIsFetchingCurrentUser } from 'redux/auth/authSelectors';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { useEffect } from 'react';
import { PublicRoute } from 'components/PublicRoute/PublicRoute';


const PageContact = lazy(() => import('../../Pages/PageContact/PageContact').then(module => ({
	...module,
	default: module.PageContact,
})));

const PageRegister = lazy(() => import('../../Pages/PageRegister/PageRegister').then(module => ({
	...module,
	default: module.PageRegister,
})));

const PageLogin = lazy(() => import('../../Pages/PageLogin/PageLogin').then(module => ({
	...module,
	default: module.PageLogin,
})));



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
