import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';

const businessDetails = {
  name: "Hill View Cafe - Le Meridien, Navi Mumbai",
  address: "D 33, Turbhe Midc Rd, TTC Industrial Area, MIDC Industrial Area, Turbhe, Mumbai, Navi Mumbai, Maharashtra 400703, India",
  summary: "A multi-cuisine restaurant offering extensive buffets for breakfast, lunch, and dinner, alongside an à la carte menu featuring Indian, Continental, and Asian dishes.",
  cuisine: ["Indian", "Continental", "Asian"]
};

function App() {
  return (
    <>
      <Header businessName={businessDetails.name} />
      <main>
        <Hero businessName={businessDetails.name} />
        <About summary={businessDetails.summary} />
        <Menu cuisine={businessDetails.cuisine} />
        <Contact address={businessDetails.address} />
      </main>
      <Footer businessName={businessDetails.name} />
    </>
  );
}

export default App;