import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Header from './Components/Header';
import Cards from './Components/Cards';
import productImageLocal from './assets/productImages/image1.jpg'
function App() {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: '15000',
      description: 'DDJ Creative Plastic Adjustable Detachable Portable Realistic Full Body Female Dummy Mannequin Model Display Head Fixed with Metal Base 69" (Standing Position) with Hair Wig (Pack of 1)',
      image: 'https://th.bing.com/th/id/OIP.rmpHLSOG0kmrjPBIY2FU5AAAAA?rs=1&pid=ImgDetMain',
    },
    {
      id: 2,
      name: 'Product 2',
      price: '1000',
      description: 'DDJ Creative Plastic Adjustable Detachable Portable Realistic Full Body Female Dummy Mannequin Model Display Head Fixed with Metal Base 69" (Standing Position) with Hair Wig (Pack of 1)',
      image: 'https://www.punjabandesigner.com/wp-content/uploads/2020/07/indian-boutique-usa.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      price: '25000',
      description: 'DDJ Creative Plastic Adjustable Detachable Portable Realistic Full Body Female Dummy Mannequin Model Display Head Fixed with Metal Base 69" (Standing Position) with Hair Wig (Pack of 1)',
      image: 'https://i.pinimg.com/originals/6b/fa/92/6bfa92a596183779abc708bdd4c6a97b.jpg',
    },
    {
      id: 4,
      name: 'Product 4',
      price: '5000',
      description: 'DDJ Creative Plastic Adjustable Detachable Portable Realistic Full Body Female Dummy Mannequin Model Display Head Fixed with Metal Base 69" (Standing Position) with Hair Wig (Pack of 1)',
      image: 'https://i.pinimg.com/originals/31/3f/50/313f50e0a66f9be434d7caf0563b60c4.jpg',
    }
  ]
  return (
    <>
      <div className="App">
        <Header />
      </div>
      <div className='mt-5 d-flex flex-wrap'>
        {
          products.map((product) => (
            <>
              <Cards
                productName={product?.name}
                price={product?.price}
                description={product?.description}
                productImg={product?.image}
              />
            </>
          ))
        }


      </div>
    </>

  );
}

export default App;
