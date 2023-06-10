import styles from './order-details.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import img from '../../../images/graphics.svg';
import { useDispatch, useSelector } from 'react-redux';
import { ORDER_DETAILS_CLOSE } from '../../../services/actions/ingredient-details-actions';

const OrderDetails = () => {
  const dispatch = useDispatch();

  const { number } = useSelector((state) => state.order);

  return (
    <div className={styles.orderDetailsContainer}>
      <div className={styles.closeIcon}>
        <CloseIcon onClick={() => dispatch({ type: ORDER_DETAILS_CLOSE })} />
      </div>
      <p className="mb-4 text text_type_digits-large">{number}</p>
      <p className="mb-15 text text_type_main-default">идентификатор заказа</p>
      <img className="mb-15" src={img} alt="done" />
      <p className="mb-2 text text_type_main-small">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-small text_color_inactive">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
};

export default OrderDetails;
