import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import Logo from '../../components/logo/logo';

const NotFoundScreen = (): JSX.Element => (
  <div className="page page--gray page--login">
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
        </div>
      </div>
    </header>

    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <div>
          <h1>404 Not Found</h1>
          <p className='locations__item-link'><Link to={AppRoute.Main}>Go to main page</Link></p>
        </div>
      </div>
    </main>
  </div>
);

export default NotFoundScreen;
