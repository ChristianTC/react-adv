
import styles from '../styles/styles.module.css'

import noImage from '../assets/no-image.jpg'
import { useProduct } from '../hooks/useProduct'
import { ReactElement, createContext, useContext } from 'react'


interface IProps {
  product: IProduct
  children?: ReactElement | ReactElement[]
}
interface IProduct {
  id: string,
  title: string,
  img?: string
}

interface IProductContextProps {
  counter: number,
  increaseBy: (value: number) => void,
  product: IProduct
}

const ProductContext = createContext({} as IProductContextProps);
const { Provider } = ProductContext;

export const ProductImage = ({img = ''}) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string
  if (img) {
    imgToShow = img
  } else if(product.img){
    imgToShow = product.img
  }else {
    imgToShow = noImage
  }

  return (
    <img className={ styles.productImg } src={imgToShow} alt="Coffee Mug" />
  )
}

export const ProductTitle = ({title}: {title?: string}) => {
  const { product } = useContext(ProductContext)
  return (
    <span className={styles.productDescription}>{ title ? title : product.title }</span>
  )
}

export const ProductButtons = () => {

  const { counter, increaseBy} = useContext(ProductContext)

  return (
    <div className={styles.buttonsContainer}>
      <button onClick={()=>increaseBy(-1)} className={styles.buttonMinus}> - </button>
      <div className={styles.countLabel}> { counter } </div>
      <button onClick={()=>increaseBy(1)} className={styles.buttonAdd}> + </button>
    </div>
  )
}

const ProductCard = ({ children, product }: IProps) => {
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

ProductCard.Image = ProductImage
ProductCard.Title = ProductTitle
ProductCard.Buttons = ProductButtons

export {ProductCard}