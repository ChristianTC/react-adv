import { IProps as IProductButtonsProps } from '../components/ProductButtons';
import { IProps as IProductCardProps } from '../components/ProductCard';
import { IProps as IProductImageProps} from '../components/ProductImage';
import { IProps as IProductTitleProps } from '../components/ProductTitle';
export interface IProduct {
  id: string,
  title: string,
  img?: string
}

export interface IProductContextProps {
  counter: number,
  increaseBy: (value: number) => void,
  product: IProduct
}

export interface IProductCardHOCProps {
  ({ children, product }: IProductCardProps): JSX.Element,
  Title: (props: IProductTitleProps) => JSX.Element,
  Image: (props: IProductImageProps) => JSX.Element,
  Buttons: (props: IProductButtonsProps) => JSX.Element,
}