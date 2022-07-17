import { Offers } from '../../types/offers';
import OfferComponent from '../offer-component/offer-component';
import SortingComponent from '../sorting-component/sorting-component';

type OffersListComponentProps = {
    offers: Offers
   }

const OffersListComponent = ({offers} : OffersListComponentProps): JSX.Element => (
  <section className="cities__places places">
    <h2 className="visually-hidden">Places</h2>
    <b className="places__found">{offers.length} places to stay in Amsterdam</b>
    <SortingComponent offers={offers}/>
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <OfferComponent key={offer.id}
            offer = {offer}
          />
        ))
      }
    </div>
  </section>
);

export default OffersListComponent;
