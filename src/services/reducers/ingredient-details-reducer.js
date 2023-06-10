import {
  INGREDIENT_DETAILS_CLOSE,
  INGREDIENT_DETAILS_OPEN,
  ORDER_DETAILS_CLOSE,
  ORDER_DETAILS_OPEN,
} from '../actions/ingredient-details-actions';

const initialState = {
  infoOfIngredient: {},
  isOpenedIngredientDetails: false,
  isOpenedOrderDetails: false,
};

const ingredientDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INGREDIENT_DETAILS_OPEN: {
      return {
        ...state,
        isOpenedIngredientDetails: true,
        infoOfIngredient: action.payload,
      };
    }

    case INGREDIENT_DETAILS_CLOSE: {
      return {
        ...state,
        isOpenedIngredientDetails: false,
      };
    }

    case ORDER_DETAILS_OPEN: {
      return {
        ...state,
        isOpenedOrderDetails: true,
      };
    }

    case ORDER_DETAILS_CLOSE: {
      return {
        ...state,
        isOpenedOrderDetails: false,
      };
    }

    default:
      return state;
  }
};

export default ingredientDetailsReducer;
