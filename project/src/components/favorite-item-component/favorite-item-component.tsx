import { Link } from 'react-router-dom';
import { Offer } from '../../types/offers';

type FavoriteItemComponentProps = {
  offer: Offer
}

const FavoriteItemComponent = ({ offer }: FavoriteItemComponentProps): JSX.Element => {
  const maxRating = 5;
  const currentRating = `${Math.round(offer.rating) * 100 / maxRating}%`;
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to="/">
            <span>Amsterdam</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        <article className="favorites__card place-card">
          {offer.isPremium ?
            <div className="place-card__mark">
              <span>Premium</span>
            </div> : null}
          <div className="favorites__image-wrapper place-card__image-wrapper">
            <Link to="/">
              <img className="place-card__image" src="img/apartment-small-03.jpg" width="150" height="110" alt="Place" />
            </Link>
          </div>
          <div className="favorites__card-info place-card__info">
            <div className="place-card__price-wrapper">
              <div className="place-card__price">
                <b className="place-card__price-value">&euro;{offer.price}</b>
                <span className="place-card__price-text">&#47;&nbsp;night</span>
              </div>
              <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                <svg className="place-card__bookmark-icon" width="18" height="19">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">In bookmarks</span>
              </button>
            </div>
            <div className="place-card__rating rating">
              <div className="place-card__stars rating__stars">
                <span style={{ width: currentRating }} />
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <h2 className="place-card__name">
              <Link to="/offer">
                {offer.title}
              </Link>
            </h2>
            <p className="place-card__type">{offer.type}</p>
          </div>
        </article>
      </div>
    </li>
  );
};

export default FavoriteItemComponent;
