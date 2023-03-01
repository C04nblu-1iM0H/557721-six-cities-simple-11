import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {OfferType} from '../../types/offer';
import {City} from '../../types/city';
import {useRef, useEffect} from 'react';
import useMap from '../../hooks/useMap';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';

type PageProps = {
  offers: OfferType[];
  activeCard: OfferType | undefined;
  city: City;
  newMap:string;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({offers, activeCard, city, newMap}: PageProps): JSX.Element {
  const {location} = city;
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            activeCard !== undefined && offer.title === activeCard.title
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, offers, activeCard, location]);
  return <section className={`${newMap}__map map`} ref={mapRef}></section>;

}

export default Map;
