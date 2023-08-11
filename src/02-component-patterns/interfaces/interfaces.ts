import { ReactElement } from 'react';

export interface IProductCardProps {
  product: IProduct
  children?: ReactElement | ReactElement[]
}
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