import Header from '../Header/Header';
import Sell from '../Sell/Sell';
import './style.scss';

const CustomerLayer = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <Sell />
      </div>
    </>
  );
};

export default CustomerLayer;
