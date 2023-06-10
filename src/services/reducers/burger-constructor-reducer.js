import {
  ADD_INGREDIENT_TO_BURGER_CONSTRUCTOR,
  DELETE_INGREDIENT_FROM_BURGER_CONSTRUCTOR,
  UPDATE_BUN_IN_BURGER_CONSTRUCTOR,
  UPDATE_INGREDIENTS_IN_BURGER_CONSTRUCTOR,
} from '../actions/burger-constructor-actions';

const initialtState = {
  bun: null,
  ingredients: [],
};

export const burgerConstructorReducer = (state = initialtState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT_TO_BURGER_CONSTRUCTOR: {
      return {
        ...state,
        ingredients:
          action.payload.type !== 'bun'
            ? [...state.ingredients, action.payload]
            : state.ingredients,
      };
    }

    case DELETE_INGREDIENT_FROM_BURGER_CONSTRUCTOR: {
      return {
        ...state,
        ingredients: [
          ...state.ingredients.filter(
            (ingredient) => ingredient.ID !== action.ID
          ),
        ],
      };
    }

    case UPDATE_BUN_IN_BURGER_CONSTRUCTOR: {
      return {
        ...state,
        bun: action.isBun ? action.payload : state.bun,
      };
    }

    case UPDATE_INGREDIENTS_IN_BURGER_CONSTRUCTOR: {
      return {
        ...state,
        ingredients: action.payload,
      };
    }

    default:
      return state;
  }
};
