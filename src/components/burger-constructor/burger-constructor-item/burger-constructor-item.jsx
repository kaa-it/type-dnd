import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { DELETE_INGREDIENT_FROM_BURGER_CONSTRUCTOR } from '../../../services/actions/burger-constructor-actions';
import styles from './burger-constructor-item.module.css';
import { useDrop, useDrag } from 'react-dnd';
import { useRef } from 'react';
import { DECREMENT_BURGER_INGREDIENT_COUNT } from '../../../services/actions/burger-ingredients-actions';
import {ingredientPropTypes} from "../../../utils/ingredientPropTypes";

export const BurgerConstructorItem = ({ item, index, moveIngredients }) => {
  const dispatch = useDispatch();
  const ref = useRef(null);

  const [{handlerId}, drop] = useDrop({
    accept: "ingredient",
    collect: (monitor) => ({
      handlerId: monitor.getHandlerId(),
    }),
    canDrop: (item) => {
      return item.type !== 'bun';
    },
    hover: (item, monitor) => {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;

      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveIngredients(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'ingredient',
    item: () => {
      return { ...item, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <div
      className={styles.iconAndConstructorElement}
      ref={ref}
      style={{ opacity: opacity }}
      data-handler-id={handlerId}
    >
      <DragIcon className="dragIcon" type="primary" />
      <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item.image}
        handleClose={() => {
          dispatch({
            type: DELETE_INGREDIENT_FROM_BURGER_CONSTRUCTOR,
            ID: item.ID,
          });
          dispatch({
            type: DECREMENT_BURGER_INGREDIENT_COUNT,
            payload: { itemId: item._id },
          });
        }}
      />
    </div>
  );
};

BurgerConstructorItem.propTypes = {
  item: ingredientPropTypes.isRequired,
  index: PropTypes.number.isRequired,
  moveIngredients: PropTypes.func,
};
