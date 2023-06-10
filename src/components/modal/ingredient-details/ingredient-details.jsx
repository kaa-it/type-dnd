import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ingredient-details.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { INGREDIENT_DETAILS_CLOSE } from '../../../services/actions/ingredient-details-actions';

const IngredientDetails = () => {
  const dispatch = useDispatch();

  const item = useSelector((state) => state.ingredientDetails.infoOfIngredient);

  return (
    <div className={styles.ingredientDetails}>
      <div className={styles.ingredientDetailsHead}>
        <h2 className="text text_type_main-large">Детали ингредиента</h2>
        <CloseIcon
          onClick={() => dispatch({ type: INGREDIENT_DETAILS_CLOSE })}
          type="primary"
        />
      </div>
      <img className="mb-4" src={item.image_large} alt={item.name} />
      <p className="mb-8 text text_type_main-medium">{item.name}</p>
      <div className={styles.ingredientDetailsInfo}>
        <div className="mr-5">
          <p className="text text_type_main-small text_color_inactive">
            Каллории,ккал
          </p>
          <p className="text text text_type_digits-default text_color_inactive">
            {item.calories}
          </p>
        </div>
        <div className="mr-5">
          <p className="text text_type_main-small text_color_inactive">
            Белки, г
          </p>
          <p className="text text text_type_digits-default text_color_inactive">
            {item.proteins}
          </p>
        </div>
        <div className="mr-5">
          <p className="text text_type_main-small text_color_inactive">
            Жиры, г
          </p>
          <p className="text text text_type_digits-default text_color_inactive">
            {item.fat}
          </p>
        </div>
        <div>
          <p className="text text_type_main-small text_color_inactive">
            Углеводы, г
          </p>
          <p className="text text text_type_digits-default text_color_inactive">
            {item.carbohydrates}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IngredientDetails;
