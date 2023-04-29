import {useState} from 'react';
import {useAppDispatch} from '../../hooks';
import {SortingValueTypes} from '../../const';
import {sortOffers} from '../../store/app-process/app-process';

type PageProps = {
  activeSortType: SortingValueTypes;
}

function SortingOptions({activeSortType}: PageProps):JSX.Element{
  const [openTheListOptions, setOptionsListState] = useState(false);
  const optionsHandler = () => {
    setOptionsListState(!openTheListOptions);
  };
  const dispatch = useAppDispatch();
  const sortingHandler = (sortType: SortingValueTypes) => {
    optionsHandler();
    if(sortType === activeSortType){
      return;
    }
    dispatch(sortOffers({sortType}));

  };
  return(
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by &#160;</span>
      <span className="places__sorting-type" tabIndex={0} onClick={optionsHandler}>
        {activeSortType}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom places__options--${openTheListOptions ? 'opened' : 'closed'}`}>
        {Object.values(SortingValueTypes).map((sortType) => (
          <li className={`places__option ${activeSortType === sortType ? 'places__option--active' : '' } `}
            key={sortType}
            tabIndex={0}
            onClick={() => sortingHandler(sortType)}
          >
            {sortType}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortingOptions;
