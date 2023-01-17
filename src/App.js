import './App.scss';
import Header from './Components/Layouts/Header/Header';
import Page from './Components/Layouts/Page/Page';
import Footer from './Components/Layouts/Footer/Footer';
import { ScreenClassProvider } from 'react-grid-system';

const App = () => {

  return (
    <ScreenClassProvider>
      <Header />
      <Page />
      <Footer />
    </ScreenClassProvider>
  );

}

export default App;
