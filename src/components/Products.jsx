import React, { use } from "react";
import ProductCard from "./ProductCard";

const Products = ({dataPromise , carts , setCarts}) => {
    const productsDisplay = use(dataPromise);
    
    

  return (
    <div>
      <div className="text-center mb-5">
        <h1 className="text-5xl font-semibold mb-4">Premium Digital Tools</h1>
        <p >
          Choose from our curated collection of premium digital products
          designedto boost your productivity and creativity.
        </p>
      </div>

      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5">


        {
            productsDisplay.map((product) => (<ProductCard key={product.id} product={product} carts={carts} setCarts={setCarts}></ProductCard>))
        }





      </div>
    </div>
  );
};

export default Products;
