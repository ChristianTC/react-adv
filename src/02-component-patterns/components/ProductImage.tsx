import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'

export interface IProps {
  img?: string,
  className?: string,
  style?: React.CSSProperties,
}

export const ProductImage = ({img, className, style}: IProps) => {
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
    <img className={ `${styles.productImg} ${className}` } src={imgToShow} alt="Coffee Mug" style={style} />
  )
}