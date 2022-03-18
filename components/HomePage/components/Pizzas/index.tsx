import React from 'react';
import { HomeProps } from '../../../../pages';
import { Product } from '../../../../types';
import SelectTitle from '../../../shard/SelectTitle';
import Pizza from './Pizza';
import styles from './styles.module.scss';

interface PizzasProps {
  products: Product[];
}

export default function Pizzas({ products }: PizzasProps) {
  const [selected, setSelected] = React.useState('pizza');
  if (selected)
    products = products.filter((product) => product.type === selected);

  const [search, setSearch] = React.useState('');
  if (search)
    products = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase()),
    );
  const handleChange = (e: React.FormEvent<HTMLInputElement>) =>
    setSearch(e.currentTarget.value);

  const titles = React.useMemo(
    () => ['pizza', 'pasta', 'starter', 'drink'],
    [],
  );

  return (
    <div className={styles.container}>
      <SelectTitle titles={titles} state={selected} setState={setSelected} />
      <input
        placeholder="Search..."
        type="text"
        className={styles.search}
        onChange={handleChange}
      />
      <div className={styles.products}>
        {products.map((product: Product) => (
          <Pizza key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
