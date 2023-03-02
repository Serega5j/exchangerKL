import { useState } from 'react';
import {
  basic_courses_collections,
  basic_courses_buildings,
  basic_courses_materials
} from '../../helper/constants';

const Buy = () => {
  const [sell, setSell] = useState({
    group: 'collectionsBuy',
    value: ''
  });
  const [livingSearch, setLivingSearch] = useState(false);
  const [variants, setVariants] = useState<string[]>([]);

  const typeHandler = (str: string): unknown => {
    if (str.length > 0) {
      setLivingSearch(true);
    }
    if (str.length === 0) {
      setLivingSearch(false);
    }

    if (str.length > 10) {
      setSell({ ...sell, value: str.slice(0, -1) });
      return livingSearchF(str.slice(0, -1));
    }
    setSell({ ...sell, value: str });
    return livingSearchF(str);
  };

  const livingSearchF = (str: string): void => {
    const tmpArray: string[] = Object.keys(basic_courses_collections).concat(
      Object.keys(basic_courses_buildings),
      Object.keys(basic_courses_materials)
    );
    if (str.length > 1) {
      setVariants(
        tmpArray.filter((product) => {
          return product.toLowerCase().includes(str.toLowerCase());
        })
      );
    }
    if (str.length <= 1) {
      setVariants([]);
    }
    return;
  };

  return (
    <>
      <div className='fromCustomer'>
        <h4>Выбор ценного элемента для покупки</h4>
        <input
          title='Поиск по всем категориям'
          type='text'
          className='textField'
          placeholder='Поиск по всем категориям'
          value={sell.value}
          onChange={(e) => {
            typeHandler(e.target.value);
          }}
        />
        <ul className='livingSearch'>
          {variants?.map((product, i) => (
            <li
              key={`продукт ${i}`}
              onClick={(e) => {
                setSell({ ...sell, value: e.currentTarget.textContent as string });
                setVariants([]);
              }}
            >
              {product}
            </li>
          ))}
        </ul>
        {!livingSearch && (
          <>
            <div className='container_wrap'>
              <p>Получаю</p>
              <input
                type='radio'
                id='collectionsBuy'
                name='chooseGroupBuy'
                defaultChecked
                onChange={(e) => {
                  setSell({ ...sell, group: e.target.id });
                }}
              />
              <label htmlFor='collectionsBuy'>коллекции</label>
              <input
                type='radio'
                id='buildingsBuy'
                name='chooseGroupBuy'
                onChange={(e) => {
                  setSell({ ...sell, group: e.target.id });
                }}
              />
              <label htmlFor='buildingsBuy'>Здания</label>
              <input
                type='radio'
                id='materialsBuy'
                name='chooseGroupBuy'
                onChange={(e) => {
                  setSell({ ...sell, group: e.target.id });
                }}
              />
              <label htmlFor='materialsBuy'>Материалы</label>
            </div>
            <select>
              {sell.group === 'collectionsBuy' && (
                <>
                  <option value=''>Коллекции</option>
                  {Object.keys(basic_courses_collections)?.map((element, i) => (
                    <option key={`element${i}`} value={element}>
                      {element}
                    </option>
                  ))}
                </>
              )}
              {sell.group === 'buildingsBuy' && (
                <>
                  <option value=''>Здания</option>
                  {Object.keys(basic_courses_buildings)?.map((element, i) => (
                    <option key={`element${i}`} value={element}>
                      {element}
                    </option>
                  ))}
                </>
              )}
              {sell.group === 'materialsBuy' && (
                <>
                  <option value=''>Материалы</option>
                  {Object.keys(basic_courses_materials)?.map((element, i) => (
                    <option key={`element${i}`} value={element}>
                      {element}
                    </option>
                  ))}
                </>
              )}
            </select>
          </>
        )}
      </div>
    </>
  );
};
export default Buy;
