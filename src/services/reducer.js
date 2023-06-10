import { combineReducers } from 'redux';
import { burgerConstructorReducer } from './reducers/burger-constructor-reducer';
import { burgerIngredientReducer } from './reducers/burger-ingredients-reducer';
import ingredientDetailsReducer from './reducers/ingredient-details-reducer';
import { orderReducer } from './reducers/order-reducer';

export const rootReducer = combineReducers({
  burgerIngredient: burgerIngredientReducer,
  ingredientDetails: ingredientDetailsReducer,
  burgerConstructor: burgerConstructorReducer,
  order: orderReducer,
});
