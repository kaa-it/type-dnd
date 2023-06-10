import { getIngredients } from '../../utils/norma-api';

export const BURGER_INGREDIENTS_REQUEST = 'BURGER_INGREDIENTS_REQUEST';
export const BURGER_INGREDIENTS_SUCCESS = 'BURGER_INGREDIENTS_SUCCESS';
export const BURGER_INGREDIENTS_FAILED = 'BURGER_INGREDIENTS_FAILED';

export const UPDATE_BUN_COUNT = 'UPDATE_BUN_COUNT';
export const INCREMENT_BURGER_INGREDIENT_COUNT =
  'INCREMENT_BURGER_INGREDIENT_COUNT';
export const DECREMENT_BURGER_INGREDIENT_COUNT =
  'DECREMENT_BURGER_INGREDIENT_COUNT';

export const getBurgerIngredients = () => {
  return (dispatch) => {
    dispatch({ type: BURGER_INGREDIENTS_REQUEST });
    getIngredients()
      .then((response) => {
        if (response && response.success) {
          dispatch({
            type: BURGER_INGREDIENTS_SUCCESS,
            payload: response.data,
          });
        }
      })
      .catch(() => {
        dispatch({ type: BURGER_INGREDIENTS_FAILED });
      });
  };
};
