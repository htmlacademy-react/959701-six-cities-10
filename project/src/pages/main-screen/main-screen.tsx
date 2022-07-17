import MapComponent from '../../components/map-component/map-component';
import HeaderComponent from '../../components/header-component/header-component';
import FilterComponent from '../../components/filter-component/filter-component';
import OffersListComponent from '../../components/offers-list-component/offers-list-component';
import { Offers } from '../../types/offers';

type MainScreenProps = {
  offers: Offers
}

const MainScreen = ({ offers }: MainScreenProps): JSX.Element => (
  <div className="page page--gray page--main">
    <HeaderComponent />
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <FilterComponent />
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <OffersListComponent
            offers={offers}
          />
          <div className="cities__right-section">
            <MapComponent />
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default MainScreen;
