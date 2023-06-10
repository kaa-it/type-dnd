import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrop } from 'react-dnd';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { UPDATE_BUN_IN_BURGER_CONSTRUCTOR } from '../../../services/actions/burger-constructor-actions';
import { UPDATE_BUN_COUNT } from '../../../services/actions/burger-ingredients-actions';
import styles from './bun.module.css';
import { ingredientPropTypes } from '../../../utils/ingredientPropTypes';

const Bun = ({ bun, coordinate, position }) => {
  const dispatch = useDispatch();

  const onHandleDropBuns = (item) => {
    dispatch({
      type: UPDATE_BUN_IN_BURGER_CONSTRUCTOR,
      isBun: true,
      payload: {
        ...item,
      },
    });
    dispatch({
      type: UPDATE_BUN_COUNT,
      payload: { itemId: item._id },
    });
  };

  const [, dropBuns] = useDrop({
    accept: 'bun',
    drop(item) {
      onHandleDropBuns(item);
    },
  });

  return (
    <div ref={dropBuns}>
      {bun ? (
        <ConstructorElement
          type={coordinate}
          isLocked={true}
          text={`${bun.name} ${position}`}
          price={bun.price}
          thumbnail={bun?.image}
        />
      ) : (
        <div
          style={{
            textAlign: 'center',
          }}
          className={`constructor-element ${
            coordinate === 'bottom'
              ? 'constructor-element_pos_bottom'
              : 'constructor-element_pos_top'
          } ${styles.bun}`}
        >
          <span
            style={{
              transform: 'translateY(50%)',
            }}
            className="constructor-element__text"
          >
            Выбери булку
          </span>
        </div>
      )}
    </div>
  );
};

Bun.propTypes = {
  bun: ingredientPropTypes,
  coordinate: PropTypes.string,
  position: PropTypes.string,
};

export default Bun;
