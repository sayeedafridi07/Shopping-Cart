import React from "react";
import Card from "./Card";

function Home() {
  const products = [
    {
      id: 1,
      img: "https://cdn.pixabay.com/photo/2016/11/23/06/57/isolated-t-shirt-1852114_960_720.png",
      title: "Cotton Shirt",
      desc: "Some quick example text to build on the card title and make",
      price: "Price: Rs 250",
      prev_price: "Rs 300",
    },
    {
      id: 2,
      img: "https://cdn.pixabay.com/photo/2017/01/13/04/56/t-shirt-1976334_960_720.png",
      title: "White Tshirt",
      desc: "Some quick example text to build on the card title and make",
      price: "Price: Rs 550",
      prev_price: "Rs 600",
    },
    {
      id: 3,
      img: "https://cdn.pixabay.com/photo/2016/11/23/06/57/isolated-t-shirt-1852113_960_720.png",
      title: "Full Sleeve Tshirt",
      desc: "Some quick example text to build on the card title and make",
      price: "Price: Rs 200",
      prev_price: "Rs 250",
    },
  ];

  return (
    <>
      <h1
        className="text-center"
        style={{ margin: "35px 0px", marginTop: "90px" }}
      >
        Our items
      </h1>
      <div className="py-4 container">
        <div className="row justify-content-center">
          {products.map((p) => {
            return (
              <Card
                img={p.img}
                title={p.title}
                desc={p.desc}
                p={p}
                price={p.price}
                prev_price={p.prev_price}
                key={p.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
