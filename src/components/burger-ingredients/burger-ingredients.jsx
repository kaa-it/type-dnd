import { useMemo, useState, useRef, useEffect, useCallback } from 'react';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientsGroup from './ingredients-group/ingredients-group';
import styles from './burger-ingredients.module.css';
import Modal from '../modal/modal';
import IngredientDetails from '../modal/ingredient-details/ingredient-details';
import { useDispatch, useSelector } from 'react-redux';
import { getBurgerIngredients } from '../../services/actions/burger-ingredients-actions';

const BurgerIngredients = () => {
  const isOpened = useSelector(
    (state) => state.ingredientDetails.isOpenedIngredientDetails
  );

  const data = useSelector((state) => state.burgerIngredient.ingredients);

  const dispatch = useDispatch();

  const Tabs = {
    BUNS: 'buns',
    SAUCES: 'sauces',
    MAINS: 'mains',
  };

  const [current, setCurrent] = useState(Tabs.BUNS);

  const buns = useMemo(
    () => data.filter((item) => item.type === 'bun'),
    [data]
  );

  const sauses = useMemo(
    () => data.filter((item) => item.type === 'sauce'),
    [data]
  );

  const mains = useMemo(
    () => data.filter((item) => item.type === 'main'),
    [data]
  );

  const tabsRef = useRef();
  const bunsRef = useRef();
  const sausesRef = useRef();
  const mainsRef = useRef();

  const tabSwitch = useCallback(() => {
    const calculationDifferences = (ref) =>
      Math.abs(
        tabsRef.current.getBoundingClientRect().bottom -
          ref.current.getBoundingClientRect().top
      );

    if (calculationDifferences(bunsRef) <= 105) {
      setCurrent(Tabs.BUNS);
    } else if (calculationDifferences(sausesRef) <= 105) {
      setCurrent(Tabs.SAUCES);
    } else if (calculationDifferences(mainsRef) <= 105) {
      setCurrent(Tabs.MAINS);
    }
  }, [Tabs.BUNS, Tabs.SAUCES, Tabs.MAINS]);

  useEffect(() => {
    tabSwitch();
    dispatch(getBurgerIngredients());
    // return tabSwitch();
  }, [tabSwitch, dispatch]);

  return (
    <section className={styles.burgerIngredients}>
      <div className={styles.burgerIngredientsTabs} ref={tabsRef}>
        <Tab
          value="buns"
          active={current === 'buns'}
          onClick={() => {
            setCurrent(Tabs.BUNS);
            bunsRef.current.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Булки
        </Tab>
        <Tab
          value="sauces"
          active={current === 'sauces'}
          onClick={() => {
            setCurrent(Tabs.SAUCES);
            sausesRef.current.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Соусы
        </Tab>
        <Tab
          value="mains"
          active={current === 'mains'}
          onClick={() => {
            setCurrent(Tabs.MAINS);
            mainsRef.current.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Начинки
        </Tab>
      </div>
      <div className={`${styles.wrap} custom-scroll`} onScroll={tabSwitch}>
        <p className="text text_type_main-medium" ref={bunsRef}>
          Булки
        </p>
        <IngredientsGroup data={buns} />
        <p className="text text_type_main-medium" ref={sausesRef}>
          Соусы
        </p>
        <IngredientsGroup data={sauses} />
        <p className="text text_type_main-medium" ref={mainsRef}>
          Начинки
        </p>
        <IngredientsGroup data={mains} />
      </div>

      {isOpened && (
        <Modal>
          <IngredientDetails />
        </Modal>
      )}
    </section>
  );
};

export default BurgerIngredients;
