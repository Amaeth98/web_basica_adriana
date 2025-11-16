import Header from './components/Header';
import NavbarComponent from './components/Navbar';
import Contentsection from './components/Contentsection';
import Aside from './components/Aside';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Header />
      <NavbarComponent />
      <main className="app-layout">
        <section className="main-section">
          <Contentsection />
        </section>
        <aside className="main-aside">
          <Aside />
        </aside>
      </main>
      <Footer />
    </div>
  );
}
