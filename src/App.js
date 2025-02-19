import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Header from './Components/Header';
import Cards from './Components/Cards';
import productImageLocal from './assets/productImages/'
function App() {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: '15000',
      description: 'DDJ Creative Plastic Adjustable Detachable Portable Realistic Full Body Female Dummy Mannequin Model Display Head Fixed with Metal Base 69" (Standing Position) with Hair Wig (Pack of 1)'
      //image:'',
    },
    {
      id: 2,
      name: 'Product 2',
      price: '1000',
      description: 'DDJ Creative Plastic Adjustable Detachable Portable Realistic Full Body Female Dummy Mannequin Model Display Head Fixed with Metal Base 69" (Standing Position) with Hair Wig (Pack of 1)'
    },
    {
      id: 3,
      name: 'Product 3',
      price: '25000',
      description: 'DDJ Creative Plastic Adjustable Detachable Portable Realistic Full Body Female Dummy Mannequin Model Display Head Fixed with Metal Base 69" (Standing Position) with Hair Wig (Pack of 1)'
    },
    {
      id: 4,
      name: 'Product 4',
      price: '5000',
      description: 'DDJ Creative Plastic Adjustable Detachable Portable Realistic Full Body Female Dummy Mannequin Model Display Head Fixed with Metal Base 69" (Standing Position) with Hair Wig (Pack of 1)'
    }
  ]
  return (
    <>
      <div className="App">
        <Header />
      </div>
      <div>
        <Cards
       productName={"churidar"} 
       price={"1200"}
       description={"wefcanvfgg"}
       productImage={""}
        />
      </div>
    </>

  );
}

export default App;
