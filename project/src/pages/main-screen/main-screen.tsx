import Map from '../../components/map/map';
import Header from '../../components/header/header';
import Filter from '../../components/filter/filter';
import OffersList from '../../components/offers-list/offers-list';
import { Offers } from '../../types/offers';

type MainScreenProps = {
  offers: Offers
}

const MainScreen = ({ offers }: MainScreenProps): JSX.Element => (
  <div className="page page--gray page--main">
    <Header />
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <Filter />
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <OffersList
            offers={offers}
          />
          <div className="cities__right-section">
            <Map />
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default MainScreen;
