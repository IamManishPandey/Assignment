
import { useState } from 'react';
import './App.css';
import data from './data.json'

const App =()=> {
   
  const [name1,setName1] = useState("")
  const [name2,setName2] = useState("")

  const [price1,setPrice1] = useState("")
  const [price2,setPrice2] = useState("")

  const  handleAddToCart =()=>{
     const name= data.data[0].productList[0].name
     const price =data.data[0].productList[0].price
     setName1(name)
     setPrice1(price)

    console.log("ProductName : " + name)

    console.log("Product Price :" + price)
    
    // alert("ProductName : " + name + " Price : " + price)
    

  }
  const handleRemoveCart = ()=>{
    const name = ""
    const price = ""
    console.log("ProductName : " + name)
    console.log("Product Price :" + price)
    // alert("ProductName : " + name + " Price : " + price)

  }

  return (
    <div className="App">
     <h1>Hello - Intern Task</h1>
      <section class="category" id="category">
      <h2 id="title">{data.data[0].name} </h2>
        
        <hr></hr>
        <div className="grid-container">
            <div className="grid-item">
                <p id="name1"> Name : {data.data[0].productList[0].name} </p>
                <p id="price1">Price:{data.data[0].productList[0].price} </p>
                <div className="btn">
                    <a className="Add" href="#" onClick ={handleAddToCart}>Add To The Cart</a>
                    <a className="Del" href="#" onClick = {handleRemoveCart}>Remove From Cart</a>
                </div>               
            </div>
            <div className="grid-item">
                <p>Name: {data.data[1].productList[1].name} </p>
                <p>Price: {data.data[1].productList[1].price}</p>
                <div className="btn">
                    <a className="Add" href="#" onClick ={handleAddToCart}>Add To The Cart</a>
                    <a className="Del" href="#" onClick ={handleRemoveCart}>Remove From Cart</a>
                </div>               
            </div>
        </div>                
    </section>
    <section className="category" id="category">
        <h2 id="title">{data.data[1].name} </h2>
        <hr></hr>
        <div className="grid-container">
            <div className="grid-item">
                <p>Name: {data.data[1].productList[0].name} </p>
                <p>Price: {data.data[1].productList[0].price} </p>
                <div className="btn">
                    <a class="Add" href="#" onClick={handleAddToCart}>Add To The Cart</a>
                    <a class="Del" href="#" onClick={handleRemoveCart}>Remove From Cart</a>
                </div>               
            </div>
            <div className="grid-item">
                <p>Name:  {data.data[1].productList[1].name}  </p>
                <p>Price: {data.data[1].productList[1].price}</p>
                <div className="btn">
                    <a className="Add" href="#" onClick={handleAddToCart}>Add To The Cart</a>
                    <a className="Del" href="#" onClick={handleRemoveCart}>Remove From Cart</a>
                </div>               
            </div>
        </div>                
    </section>
    </div>
  );
}

export default App;
