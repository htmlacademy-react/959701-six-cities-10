import ListingComponent from '../../components/listing-component/listing-component';
import MapComponent from '../../components/map-component/map-component';
import HeaderComponent from '../../components/header-component/header-component';
import FilterComponent from '../../components/filter-component/filter-component';

type MainScreenProps = {
  listingsCount: number;
}

const MainScreen = ({ listingsCount: offersCount }: MainScreenProps) : JSX.Element => (
  <div className="page page--gray page--main">
    <HeaderComponent />
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <FilterComponent />
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offersCount} places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type">
                  Popular
                <svg className="places__sorting-arrow" width={7} height={4}>
                  <use xlinkHref="#icon-arrow-select" />
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li
                  className="places__option places__option--active"
                  tabIndex={0}
                >
                    Popular
                </li>
                <li className="places__option" tabIndex={0}>
                    Price: low to high
                </li>
                <li className="places__option" tabIndex={0}>
                    Price: high to low
                </li>
                <li className="places__option" tabIndex={0}>
                    Top rated first
                </li>
              </ul>
            </form>
            <div className="cities__places-list places__list tabs__content">
              <ListingComponent />
              <ListingComponent />
              <ListingComponent />
              <ListingComponent />
              <ListingComponent />
            </div>
          </section>
          <div className="cities__right-section">
            <MapComponent />
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default MainScreen;
