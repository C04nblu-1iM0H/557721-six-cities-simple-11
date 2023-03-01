import { Route, BrowserRouter, Routes } from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import WelcomScreenMain from '../../pages/welcom-screen/welcom-screen';
import {AppRoute} from '../../const';
import {useAppSelector} from '../../hooks/index';
import LoginScreen from '../../pages/login-screen/login-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import NotFoundScreen from '../../pages/not-fount-screen/not-found-screen';
import {Review} from '../../types/review';
import {City} from '../../types/city';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
type AppOffersProps = {
  reviews: Review[];
  city: City[];
}

function App({reviews, city}:AppOffersProps): JSX.Element {
  const currentCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  return(
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
          <Route
            index
            element={<WelcomScreenMain offers={offers} cities={city} currentCity={currentCity}/>}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginScreen />}
          />
          <Route path={AppRoute.Offers}>
            <Route
              path={AppRoute.Room}
              element={<RoomScreen offers={offers} reviews={reviews} />}
            />
          </Route>
          <Route
            path="*"
            element={<NotFoundScreen />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
