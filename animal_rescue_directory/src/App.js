import Footer from './components/Footer';
import Header from './components/Header';
import MainArea from './components/MainArea';
import Showcase from './components/Showcase';
import './styles/style.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <Showcase />
      <MainArea />
      <Footer />
    </div>
  );
}

export default App;
