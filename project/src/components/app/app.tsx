import { Route, BrowserRouter, Routes } from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute, AuthorizationStatus} from '../../const';
import WelcomScreenMain from '../../pages/welcom-screen/welcom-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import NotFoundScreen from '../../pages/not-fount-screen/not-found-screen';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import PageHead from '../../pages/page-head/page-head';
import {Review} from '../../types/review';
import {useAppSelector} from '../../hooks';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

type AppOffersProps = {
  reviews: Review[];
}

function App({reviews}:AppOffersProps): JSX.Element {
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return (
      <LoadingScreen />);
  }
  return(
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<PageHead />}>
            <Route
              index
              element={<WelcomScreenMain/>}
            />
            <Route
              path="*"
              element={<NotFoundScreen />}
            />
            <Route path={AppRoute.Offers}>
              <Route
                path={AppRoute.Room}
                element={<RoomScreen reviews={reviews} />}
              />
            </Route>
          </Route>
          <Route
            path={AppRoute.Login}
            element={<LoginScreen />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
