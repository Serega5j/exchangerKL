import Buy from '../Buy/Buy';
import Header from '../Header/Header';
import Offer from '../Offer/Offer';
import Sell from '../Sell/Sell';
import './style.scss';

const CustomerLayer = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <Sell />
        <Buy />
        <Offer />
      </div>
    </>
  );
};

export default CustomerLayer;
