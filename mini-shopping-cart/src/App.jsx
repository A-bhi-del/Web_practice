import { useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Laptop",
      price: 100000,
    },
    {
      id: 2,
      name: "tablet",
      price: 50000,
    },
  ]);

  const [cart, setCart] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function AddToCart(Product) {
    const exist = cart.find((item) => item.id === Product.id);
    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === Product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        ),
      );
    } else {
      setCart([
        ...cart,
        {
          ...Product,
          quantity: 1,
        },
      ]);
    }
  }

  function handleIncrease(Product) {
    setCart(
      cart.map((item) =>
        item.id === Product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  }

  function handleDecrease(Product) {
    if (Product.quantity === 1) {
      handleRemove(Product);
      return;
    } else if (Product.quantity > 1) {
      setCart(
        cart.map((item) =>
          item.id === Product.id
            ? { ...item, quantity: Math.max(0, item.quantity - 1) }
            : item,
        ),
      );
    }
  }

  function handleRemove(Product) {
    setCart(cart.filter((item) => item.id !== Product.id));
  }

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  function handleSubmit(e) {
    e.preventDefault();
    if (Number(price) < 0) {
      return;
    }
    if (!name || !price) {
      return;
    }
    setProducts([
      ...products,
      {
        id: Date.now(),
        name: name,
        price: Number(price),
      },
    ]);

    setName("");
    setPrice("");
  }

  return (
    <>
      <form className="product-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Product Name"
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter Product Price"
        />
        <button type="submit">Add Product</button>
      </form>
      <div className="products-container">
        {products.map((item) => (
          <div key={item.id} className="product-card">
            <h1>{item.name}</h1>
            <p>{item.price}</p>
            <button onClick={() => AddToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart-container">
        {cart.length === 0 ? (
          <h1>Add Something</h1>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-card">
              <h3>
                Name : {item.name} x {item.quantity}
              </h3>
              <p>Unit Price : {item.price}</p>
              <p>Amount : {item.price * item.quantity}</p>
              <button onClick={() => handleIncrease(item)}>Increase</button>
              <button onClick={() => handleDecrease(item)}>Decrease</button>
              <button onClick={() => handleRemove(item)}>Remove</button>
            </div>
          ))
        )}
        {cart.length !== 0 && (
          <h1 className="total-amount">Total Amount : ₹{total}</h1>
        )}
      </div>
    </>
  );
}

export default App;
