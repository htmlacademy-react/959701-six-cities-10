import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import HeaderComponent from '../../components/header-component/header-component';
import FavoriteItemComponent from '../../components/favorite-item-component/favorite-item-component';
import FavoritesEmptyComponent from '../../components/favorites-empty-component/favorites-empty-component';
import { Offers } from '../../types/offers';

type FavoriteScreenComponentProps = {
  offers: Offers
 };

const FavoritesScreen = ({offers} : FavoriteScreenComponentProps): JSX.Element => (
  <div className="page">
    <HeaderComponent />
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        {offers.length > 0 ?
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                offers.map((offer) => (
                  <FavoriteItemComponent key={offer.id}
                    offer = {offer}
                  />
                ))
              }
            </ul>
          </section> : <FavoritesEmptyComponent/>}

      </div>
    </main>
    <footer className="footer container">
      <Link className="footer__logo-link" to={AppRoute.Main}>
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
      </Link>
    </footer>
  </div>
);

export default FavoritesScreen;
