import './App.css';
import Header from "./components/header/Header"
import Card from "./components/card/Card"
import Footer from "./components/footer/Footer"

function f(a, b) {
  return a + b;
}

f(2, 2);
f(2, 2);
f(2, 2);
f(2, 2);


function App() {
  const carsArray = [
    {
      title: "Продаю Audi",
      price: 5000,
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, reprehenderit?",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/BMW_G11_IMG_2002.jpg/1200px-BMW_G11_IMG_2002.jpg"
    },
    {
      title: "Продаю BMW",
      price: 4000,
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, reprehenderit?",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/BMW_G11_IMG_2002.jpg/1200px-BMW_G11_IMG_2002.jpg"
    },
    {
      title: "Продаю Honda",
      price: 8000,
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, reprehenderit?",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/BMW_G11_IMG_2002.jpg/1200px-BMW_G11_IMG_2002.jpg"
    },
  ]
  return (
    <div className="App">
      <Header />
      <h2>Hello world</h2>
      <div className='container mt-5'>
        <div className='row justify-content-between'>
          {
            carsArray.map((item) => <Card title={item.title} price={item.price} img={item.img} description={item.description}/>)
          }
          {/* <Card
            title="Продаю Audi"
            price={5000}
            imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/BMW_G11_IMG_2002.jpg/1200px-BMW_G11_IMG_2002.jpg"
          />

          <Card
            title="Продаю Audi"
            price={5000}
          /> */}

        </div>
      </div>
      <div className='mt-5'>

      <Footer />
      </div>
      
    </div>
  );
}

export default App;
