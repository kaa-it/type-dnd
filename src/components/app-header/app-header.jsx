import {
  Logo,
  ProfileIcon,
  BurgerIcon,
  ListIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';

const AppHeader = () => {
  return (
    <header className={styles.appHeader}>
      <div className={styles.container}>
        <div className={styles.burgerConstructorTab}>
          <a href="#">
            <BurgerIcon type="primary" />
          </a>
          <a href="#">
            <p className="text text_type_main-default">Конструктор</p>
          </a>
        </div>
        <div className={styles.orderFeedTab}>
          <a href="#">
            <ListIcon type="secondary" />
          </a>
          <a href="#">
            <p className="text text_type_main-default text_color_inactive">
              Лента заказов
            </p>
          </a>
        </div>
        <a href="#" className={styles.logoTab}>
          <Logo />
        </a>
        <div className={styles.personalAreaTab}>
          <a href="#">
            <ProfileIcon type="secondary" />
          </a>
          <a href="#">
            <p className="text text_type_main-default text_color_inactive">
              Личный кабинет
            </p>
          </a>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
