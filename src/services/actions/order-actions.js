import { postOrder } from '../../utils/norma-api';

export const ORDER_REQUEST = 'ORDER_REQUEST';
export const ORDER_SUCCESS = 'ORDER_SUCCESS';
export const ORDER_FAILED = 'ORDER_FAILED';

export const getNumberOfOrder = (orderIngredient) => {
  return (dispatch) => {
    dispatch({ type: ORDER_REQUEST });
    postOrder(orderIngredient)
      .then((response) => {
        if (response && response.success) {
          dispatch({
            type: ORDER_SUCCESS,
            payload: response.order.number,
          });
        }
      })
      .catch(() => {
        dispatch({ type: ORDER_FAILED });
      });
  };
};
