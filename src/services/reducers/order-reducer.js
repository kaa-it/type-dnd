import {
  ORDER_FAILED,
  ORDER_REQUEST,
  ORDER_SUCCESS,
} from '../actions/order-actions';

const initialState = {
  isLoading: false,
  hasError: false,
  number: null,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ORDER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        number: action.payload,
      };
    }
    case ORDER_FAILED: {
      return {
        ...state,
        isLoading: false,
        hasError: true,
        number: null,
      };
    }

    default: {
      return state;
    }
  }
};
