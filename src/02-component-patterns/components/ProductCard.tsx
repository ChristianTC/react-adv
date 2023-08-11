
import styles from '../styles/styles.module.css'

import { useProduct } from '../hooks/useProduct'
import { ReactElement, createContext } from 'react'
import { IProductContextProps, IProduct } from '../interfaces/interfaces';

export const ProductContext = createContext({} as IProductContextProps);
const { Provider } = ProductContext;

export interface IProps {
  product: IProduct,
  children?: ReactElement | ReactElement[],
  className?: string
}

const ProductCard = ({ children, product, className }: IProps) => {
  const { counter, increaseBy } = useProduct()
  
  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
      <div className={ `${styles.productCard} ${className}` }>
        { children }
        {/* <ProductImage img={product.img} />
        <ProductTitle title={product.title} />
        <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
        
      </div>
    </Provider>
  )
}

export {ProductCard}