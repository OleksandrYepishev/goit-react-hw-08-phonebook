import { useEffect, lazy, Suspense } from 'react';
// import { withQuicklink } from 'quicklink/dist/react/hoc.js';
import { Switch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { Spinner } from '../Loader/Loader';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';
import { Container } from '../Container/Container';
import { AppBarUI } from '../AppBar';
import operations from '../../redux/auth/auth-operations';
import { getIsFetchingCurrent } from '../../redux/auth/auth-selectors';

const AsyncHomeView = lazy(() =>
  import(
    '../../views/HomeView/HomeView.jsx' /* webpackChunkName: "home-page"*/
  ),
);
const AsyncLoginView = lazy(() =>
  import('../../views/LoginView' /* webpackChunkName: "login-page"*/),
);
const AsyncRegisterView = lazy(() =>
  import('../../views/RegisterView' /* webpackChunkName: "register-page"*/),
);
const AsyncContactsView = lazy(() =>
  import(
    '../../views/ContactsView/ContactsView.jsx' /* webpackChunkName: "contacts-page"*/
  ),
);

export const App = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector(getIsFetchingCurrent);
  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return !isFetching ? (
    <Container>
      <AppBarUI />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <PublicRoute exact path="/">
            <AsyncHomeView />
          </PublicRoute>

          <PublicRoute exact path="/register" redirectTo="/contacts" restricted>
            <AsyncRegisterView />
          </PublicRoute>

          <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
            <AsyncLoginView />
          </PublicRoute>

          <PrivateRoute path="/contacts" redirectTo="/login">
            <AsyncContactsView />
          </PrivateRoute>
        </Switch>
      </Suspense>
      <Toaster position="top-right" />
    </Container>
  ) : null;
};
