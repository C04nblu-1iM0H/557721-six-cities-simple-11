import RoomScreen from '../../pages/room-screen/room-screen';
import {Review} from '../../types/review';

type Offers = {
  reviews: Review[];
}


export function Room({ reviews }:Offers): JSX.Element {
  return(
    <RoomScreen reviews={reviews} />
  );
}

export default Room;
