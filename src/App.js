import './App.css';
import AboutZombsquad from './components/about_zombsquad/AboutZombsquad';
import Banner from './components/banner/Banner.tsx';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import JoinCommunity from './components/join_community/JoinCommunity';
import NftRoadmap from './components/nft_roadmap/NftRoadmap';
import OurVision from './components/our_vision/OurVision';
import TokenomicsZombToken from './components/tokenomics_zomb_token/TokenomicsZombToken';
import WhyOwnZombsqaud from './components/why_own_zombsqaud/WhyOwnZombsqaud';
import ZombsquadGenotypes from './components/zombsquad_genotypes/ZombsquadGenotypes';
import ZombsquadMarketplace from './components/zombsquad_marketplace/ZombsquadMarketplace';
import ZombHuntingGrounds from './components/zomb_hunting_grounds/ZombHuntingGrounds';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <AboutZombsquad />
      <WhyOwnZombsqaud />
      <TokenomicsZombToken />
      <ZombsquadMarketplace />
      <ZombsquadGenotypes />
      <ZombHuntingGrounds />
      <OurVision />
      <NftRoadmap />
      <JoinCommunity />
      <div className="jc-divider"></div>
      <Footer />
    </div>
  );
}

export default App;
