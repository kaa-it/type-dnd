import { useEffect } from 'react';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import styles from './app.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getBurgerIngredients } from '../../services/actions/burger-ingredients-actions';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const App = () => {
  const dispatch = useDispatch();
  const { ingredients } = useSelector((state) => state.burgerIngredient);

  useEffect(() => {
    dispatch(getBurgerIngredients());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <AppHeader />
      {ingredients.length ? (
        <main className={styles.main}>
          <h1 className="mt-10 mb-5 text text_type_main-large">
            Соберите бургер
          </h1>
          <div className={styles.ingredientsAndConstructor}>
            <DndProvider backend={HTML5Backend}>
              <BurgerIngredients />
              <BurgerConstructor />
            </DndProvider>
          </div>
        </main>
      ) : (
        <p className={`text text_type_main-large ${styles.mainP}`}>
          Упс... что-то пошло не так. Космолет с космобургерами не долетел ;(
        </p>
      )}
    </div>
  );
};

export default App;
