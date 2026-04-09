// import logo from './logo.svg';
// import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      {/* Remove the <Router> and <Routes> entirely for a single-page app */}
      <Header />
      <Home /> 
      <Footer />
      {/* Home.jsx already contains all your sections */}
    </div>
  );
}

export default App;