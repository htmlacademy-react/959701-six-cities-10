import MainScreen from '../../pages/main-screen/main-screen';

type AppProps = {
  listingsCount: number;
}

const App = ({ listingsCount: offersCount }: AppProps): JSX.Element => <MainScreen listingsCount={offersCount} />;

export default App;
