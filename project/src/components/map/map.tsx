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

function Map({offers, activeCard, city}: PageProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city.location);

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
  }, [map, offers, activeCard]);
  return <div style={{height: '700px'}} ref={mapRef}></div>;
}

export default Map;
