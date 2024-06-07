import { useState } from "react";
import { data } from "./cartItems";
import { Card, CardBody, CardTitle, Button } from "reactstrap";
import { totalValues } from "./totalValues";
import "./shoppingCartStyles.css";

function ShoppingCart() {
  const [shoppingItems, setShoppingItems] = useState(data);

  const handleIncrementItem = (index) => {
    const newShoppingItems = [...shoppingItems];
    newShoppingItems[index].count += 1;
    // console.log(newShoppingItems);
    setShoppingItems(newShoppingItems);
  };
  const handleDecrementItem = (index) => {
    // if (shoppingItems[index].count === 1) {
    //   return;
    // }
    const newShoppingItems = [...shoppingItems];
    newShoppingItems[index].count -= 1;
    // console.log(newShoppingItems);
    setShoppingItems(newShoppingItems);
  };

  const handleRemove = (id) => {
    const filtered = shoppingItems.filter((item) => item.id !== id); // [{},{},{}]
    setShoppingItems(filtered);
  };

  return (
    <div className="app">
      <div className="totalItems">
        <span className="totalItem">{totalValues(shoppingItems)[1]}</span>
      </div>
      {shoppingItems.map((item, ind) => {
        return (
          <div className="item">
            <Card
              style={{
                width: "18rem",
              }}
            >
              <CardBody>
                <CardTitle tag="h5">{item.name}</CardTitle>
              </CardBody>
              <img
                alt="Card cap"
                src={item.image}
                width="200px"
                height="200px"
              />
              <CardBody
                style={{
                  display: "flex",
                  padding: "2px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div className="innerSection">
                  <Button color="danger" onClick={() => handleRemove(item.id)}>
                    remove
                  </Button>
                  <span>{item.price} $</span>
                </div>
              </CardBody>
              <CardBody
                style={{
                  display: "flex",
                  padding: "0px",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  color="primary"
                  onClick={() => handleIncrementItem(ind)}
                >
                  +
                </Button>
                <span>{item.count}</span>
                <Button
                  color="secondary"
                  disabled={item.count === 1}
                  onClick={() => handleDecrementItem(ind)}
                >
                  -
                </Button>
              </CardBody>
            </Card>
          </div>
        );
      })}
      <hr />
      <h1>Total : {totalValues(shoppingItems)[0]} $</h1>
    </div>
  );
}

export default ShoppingCart;

// const data2=[
//   { id: 1, price: 200 },
//   { id: 22, price: 50 },
//   { id: 5, price: 200 },
// ];

// data2[2].price+=100
