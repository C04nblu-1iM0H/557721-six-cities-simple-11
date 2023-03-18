import { Route, Routes } from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute} from '../../const';
import WelcomScreenMain from '../../pages/welcom-screen/welcom-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import NotFoundScreen from '../../pages/not-fount-screen/not-found-screen';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import PageHead from '../../pages/page-head/page-head';
import {useAppSelector} from '../../hooks';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import HistoryRouter from '../historyRoute/historyRoute';
import browserHistory from '../../browserHistory';
import {getAuthCheckedStatus} from '../../store/user-process/selectors';
import {getErrorStatus, getOffersDataLoadingStatus} from '../../store/offers-data/selectors';
import ErrorScreen from '../../pages/error-screen/error-screen';

function App(): JSX.Element {
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);
  const isOffersDataLoading = useAppSelector(getOffersDataLoadingStatus);
  const hasError = useAppSelector(getErrorStatus);

  if (!isAuthChecked || isOffersDataLoading) {
    return (
      <LoadingScreen />);
  }

  if (hasError) {
    return (
      <ErrorScreen />
    );
  }

  return(
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<PageHead />}>
            <Route
              index
              element={<WelcomScreenMain/>}
            />
            <Route
              path={AppRoute.NotFound}
              element={<NotFoundScreen />}
            />
            <Route path={AppRoute.Offers}>
              <Route
                path={AppRoute.Room}
                element={<RoomScreen />}
              />
              <Route
                path={AppRoute.NotFound}
                element={<NotFoundScreen />}
              />
            </Route>
          </Route>
          <Route
            path={AppRoute.Login}
            element={<LoginScreen />}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
