import { useContext } from 'react';
import { Context } from '../../index';
import { Subbscribable } from '../../PubSub/PubSub';
// import PubSub from 'PubSub';

const Offer = () => {
  const store = useContext(Context);
  const pubsub = new Subbscribable<string>();
  const ff = () => {
    console.log(document);
  };

  const qwe = pubsub.subscribe(console.log);
  pubsub.publish('samevalue');

  return (
    <div className='offer'>
      <h4>Предложение магазина</h4>
      <p>
        <strong>Предложено</strong>
        <strong>Курс</strong>
        <strong>Желаемо</strong>
      </p>
    </div>
  );
};

export default Offer;
