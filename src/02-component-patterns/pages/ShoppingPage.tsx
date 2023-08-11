import { ProductCard } from "../components"
import { ProductImage, ProductTitle, ProductButtons } from '../components/ProductCard';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
}

const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
        {/* <ProductCard product={ product }>
          <ProductCard.Image />
          <ProductCard.Title title={'Cafe'} />
          <ProductCard.Buttons counter={0} increaseBy={function (value: number): void {
            throw new Error("Function not implemented.");
          } } />
        </ProductCard> */}
        <ProductCard product={ product }>
          <ProductImage />
          <ProductTitle title={'Cafe'} />
          <ProductButtons counter={0} increaseBy={function (value: number): void {
            throw new Error("Function not implemented.");
          } } />
        </ProductCard>
      </div>
    </div>
  )
}

export default ShoppingPage