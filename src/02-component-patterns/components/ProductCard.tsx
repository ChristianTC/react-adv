
import styles from '../styles/styles.module.css'

import { useProduct } from '../hooks/useProduct'
import { createContext } from 'react'
import { IProductContextProps, IProductCardProps } from '../interfaces/interfaces';

export const ProductContext = createContext({} as IProductContextProps);
const { Provider } = ProductContext;

const ProductCard = ({ children, product }: IProductCardProps) => {
  const { counter, increaseBy } = useProduct()
  
  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
      <div className={ styles.productCard }>
        { children }
        {/* <ProductImage img={product.img} />
        <ProductTitle title={product.title} />
        <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
        
      </div>
    </Provider>
  )
}

export {ProductCard}