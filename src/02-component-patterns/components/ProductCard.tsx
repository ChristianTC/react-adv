
import styles from '../styles/styles.module.css'

import noImage from '../assets/no-image.jpg'
import { useProduct } from '../hooks/useProduct'


interface IProps {
  product: IProduct
}
interface IProduct {
  id: string,
  title: string,
  img?: string
}

const ProductCard = ({ product }: IProps) => {
  const { counter, increaseBy } = useProduct()
  
  return (
    <div className={ styles.productCard }>
      <img className={ styles.productImg } src={product.img ? product.img : noImage} alt="Coffee Mug" />
      {/* <img className={ styles.productImg } src={noImage} alt="Coffee Mug" /> */}
      <span className={styles.productDescription}>{ product.title }</span>

      <div className={styles.buttonsContainer}>
        <button onClick={()=>increaseBy(-1)} className={styles.buttonMinus}> - </button>
        <div className={styles.countLabel}> { counter } </div>
        <button onClick={()=>increaseBy(1)} className={styles.buttonAdd}> + </button>
      </div>

    </div>
  )
}

export default ProductCard