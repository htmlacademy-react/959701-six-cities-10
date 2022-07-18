import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

const LogoComponent = (): JSX.Element => (

  <div className="header__left">
    <Link to={AppRoute.Main}>
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
    </Link>
  </div>
);

export default LogoComponent;
