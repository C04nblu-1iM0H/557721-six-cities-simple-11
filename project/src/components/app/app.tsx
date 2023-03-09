import { Route, BrowserRouter, Routes } from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute} from '../../const';
import WelcomScreenMain from '../../pages/welcom-screen/welcom-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import NotFoundScreen from '../../pages/not-fount-screen/not-found-screen';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import PageHead from '../../pages/page-head/page-head';
import {Review} from '../../types/review';
import {City} from '../../types/city';
import { useAppDispatch } from '../../hooks/index';
import { getOfRentalOffersActions } from '../../store/actions';

type AppOffersProps = {
  reviews: Review[];
  city: City[];
}

function App({reviews, city}:AppOffersProps): JSX.Element {
  const dispatch = useAppDispatch();
  dispatch(getOfRentalOffersActions());
  return(
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<PageHead />}>
            <Route
              index
              element={<WelcomScreenMain cities={city}/>}
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
