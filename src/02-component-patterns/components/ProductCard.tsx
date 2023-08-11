
import styles from '../styles/styles.module.css'

import noImage from '../assets/no-image.jpg'
import { useProduct } from '../hooks/useProduct'
import { ReactElement } from 'react'


interface IProps {
  product: IProduct
  children?: ReactElement | ReactElement[]
}
interface IProduct {
  id: string,
  title: string,
  img?: string
}

export const ProductImage = ({img = ''}) => {
  return (
    <img className={ styles.productImg } src={img ? img : noImage} alt="Coffee Mug" />
  )
}

export const ProductTitle = ({title}: {title: string}) => {
  return (
    <span className={styles.productDescription}>{ title }</span>
  )
}

interface IProductButtons {
  counter: number,
  increaseBy: (value: number) => void ,
}

export const ProductButtons = ({counter, increaseBy}: IProductButtons) => {
  return (
    <div className={styles.buttonsContainer}>
      <button onClick={()=>increaseBy(-1)} className={styles.buttonMinus}> - </button>
      <div className={styles.countLabel}> { counter } </div>
      <button onClick={()=>increaseBy(1)} className={styles.buttonAdd}> + </button>
    </div>
  )
}

const ProductCard = ({ children, product }: IProps) => {
  // const { counter, increaseBy } = useProduct()
  
  return (
    <div className={ styles.productCard }>
      { children }
      {/* <ProductImage img={product.img} />
      <ProductTitle title={product.title} />
      <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
      
    </div>
  )
}

ProductCard.Image = ProductImage
ProductCard.Title = ProductTitle
ProductCard.Buttons = ProductButtons

export {ProductCard}