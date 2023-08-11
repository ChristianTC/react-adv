import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';

import '../styles/custom-styles.css'

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
        <ProductCard product={ product }>
          <ProductCard.Image className={'custom-image'} />
          <ProductCard.Title className={'text-bold'} />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard 
          product={ product }
          className={"bg-dark text-white"}
        >
          <ProductImage className={'custom-image'} style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.5)' }}/>
          <ProductTitle title={'Cafe'} className={'text-bold'} />
          <ProductButtons className={'custom-buttons'}/>
        </ProductCard>

        <ProductCard 
          product={ product }
          style={{backgroundColor: 'green'}}
        >
          <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.5)' }} />
          <ProductTitle style={{ fontWeight: 'bold' }} />
          <ProductButtons style={{display: 'flex', justifyContent: 'end'}} />
        </ProductCard>
      </div>
    </div>
  )
}

export default ShoppingPage