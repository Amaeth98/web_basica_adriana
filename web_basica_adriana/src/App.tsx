import Header from './components/Header';
import NavbarComponent from './components/Navbar';
import Contentsection from './components/Contentsection';
import Aside from './components/Aside';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

export default function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <NavbarComponent />
      <main className="app-layout">
        <section className="main-section">
          <Routes>
            <Route path="/" element={<Contentsection />} />
            <Route path="/usuario/:nombre" element={<Contentsection />} />
          </Routes>
        </section>
        <aside className="main-aside">
          <Aside />
        </aside>
      </main>
      <Footer />
    </div>
    </Router>
  );
}
