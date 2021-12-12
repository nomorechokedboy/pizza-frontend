import React from 'react';
import useInView from 'react-cool-inview';
import { HomeProps } from '../../../../pages';
import { Product, ProductTypes } from '../../../../types';
import Pizza from './Pizza';
import styles from './styles.module.scss';
import cx from 'classnames';
import { useDispatch } from 'react-redux';

interface PizzasProps extends HomeProps {}
interface PizzasTitleProps {
  setSelected: React.Dispatch<React.SetStateAction<ProductTypes>>;
}

const PizzasTitle = ({ setSelected }: PizzasTitleProps) => {
  const [checked, setChecked] = React.useState('Pizza');
  const activePizza = React.useMemo(
    () =>
      cx(styles.title, {
        [styles.active]: checked === 'Pizza',
      }),
    [checked],
  );
  const activePasta = React.useMemo(
    () =>
      cx(styles.title, {
        [styles.active]: checked === 'Pasta',
      }),
    [checked],
  );
  const activeStarter = React.useMemo(
    () =>
      cx(styles.title, {
        [styles.active]: checked === 'Starter',
      }),
    [checked],
  );
  const activeDrink = React.useMemo(
    () =>
      cx(styles.title, {
        [styles.active]: checked === 'Drink',
      }),
    [checked],
  );

  const handlePizza = () => {
    setChecked('Pizza');
    setSelected('pizza');
  };
  const handlePasta = () => {
    setChecked('Pasta');
    setSelected('pasta');
  };
  const handleStarter = () => {
    setChecked('Starter');
    setSelected('starter');
  };
  const handleDrink = () => {
    setChecked('Drink');
    setSelected('drink');
  };

  return (
    <div className={styles.titleWrapper}>
      <h2 className={activePizza} onClick={handlePizza}>
        Pizza
      </h2>
      <h2 className={activePasta} onClick={handlePasta}>
        Pasta
      </h2>
      <h2 className={activeStarter} onClick={handleStarter}>
        Starter
      </h2>
      <h2 className={activeDrink} onClick={handleDrink}>
        Drink
      </h2>
    </div>
  );
};

export default function Pizzas({ products }: PizzasProps) {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(),
  });

  const [selected, setSelected] = React.useState<ProductTypes>('pizza');
  products = products.filter((product) => product.type === selected);

  return (
    <div className={styles.container}>
      <PizzasTitle setSelected={setSelected} />
      <div className={styles.products} ref={observe}>
        {products.map((product: Product) => (
          <Pizza key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
