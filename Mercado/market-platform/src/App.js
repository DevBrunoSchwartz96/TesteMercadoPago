import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MapSection from './components/MapSection';
import ContentCategories from './components/ContentCategories';
import Indicate from './components/Indicate';
import Footer from './components/Footer';
import Cards from './components/Cards';
import Description from './components/Description';
import Anunciate from './components/Anunciate';
import Pagamento from './components/Pagamento';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="title-header">
        <p id="plataforma">A <strong>melhor</strong> plataforma do mercado.</p>
        <p id="seguranca">Segurança e qualidade é nosso foco</p>
        </div>
        
        <SearchBar />
        <MapSection />
        <ContentCategories />
        <Anunciate />
        <Cards/>
        <Indicate />
        <Description />
        <Pagamento />
        <Footer />
      </main>
    </div>
  );
}

export default App;
