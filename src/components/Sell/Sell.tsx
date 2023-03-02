import { useContext } from 'react';
import { useState } from 'react';
import { Context } from '../../index';
import {
  basic_courses_collections,
  basic_courses_buildings,
  basic_courses_materials
} from '../../helper/constants';

const Sell = () => {
  const store = useContext(Context);
  const [sell, setSell] = useState({
    group: 'collectionsSell',
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
        <h4>Выбор ценного элемента для продажи</h4>
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
                store.setSameProperty(e.currentTarget.textContent as string);
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
              <p>Предлагаю</p>
              <input
                type='radio'
                id='collectionsSell'
                name='chooseGroupSell'
                defaultChecked
                onChange={(e) => {
                  setSell({ ...sell, group: e.target.id });
                }}
              />
              <label htmlFor='collectionsSell'>коллекции</label>
              <input
                type='radio'
                id='buildingsSell'
                name='chooseGroupSell'
                onChange={(e) => {
                  setSell({ ...sell, group: e.target.id });
                }}
              />
              <label htmlFor='buildingsSell'>Здания</label>
              <input
                type='radio'
                id='materialsSell'
                name='chooseGroupSell'
                onChange={(e) => {
                  setSell({ ...sell, group: e.target.id });
                }}
              />
              <label htmlFor='materialsSell'>Материалы</label>
            </div>
            <select>
              {sell.group === 'collectionsSell' && (
                <>
                  <option value=''>Коллекции</option>
                  {Object.keys(basic_courses_collections)?.map((element, i) => (
                    <option key={`element${i}`} value={element}>
                      {element}
                    </option>
                  ))}
                </>
              )}
              {sell.group === 'buildingsSell' && (
                <>
                  <option value=''>Здания</option>
                  {Object.keys(basic_courses_buildings)?.map((element, i) => (
                    <option key={`element${i}`} value={element}>
                      {element}
                    </option>
                  ))}
                </>
              )}
              {sell.group === 'materialsSell' && (
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
export default Sell;
