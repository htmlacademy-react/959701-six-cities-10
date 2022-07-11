import MainScreen from '../../pages/main-screen/main-screen';

type AppProps = {
  listingsCount: number;
}

function App({ listingsCount: offersCount }: AppProps): JSX.Element {
  return <MainScreen listingsCount={offersCount} />;
}

export default App;
