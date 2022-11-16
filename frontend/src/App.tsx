import Header from './components/Header';
import NotificationBtn from './components/NotificationBtn';
import SalesCard from './components/SalesCard';
import './global.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
