import { Check } from "lucide-react";
import React, { useState } from "react";


const ProductCard = ({ product , carts , setCarts}) => {
      const [buying, setBuying] = useState(false);

      const handlebuying =() => {
        setBuying(true);

        const exists = carts.find((item) => item.id === product.id);

    if (exists) {

      return;
    }

    
    setCarts([...carts, product])
  
    

      }

  return (
    <div className="shadow-lg rounded-lg border overflow-hidden border-zinc-300 p-5 ">
        <div className="flex justify-between items-center relative">
       
        <img src={product.icon} alt={product.name} className="w-15 h-15 mb-5 border border-be-zinc-300 rounded-full p-2" />
        <p className={`absolute top-4 right-4 border border-zinc-100 px-3 py-2 rounded-full text-xs
        ${
            product.tag === "best seller" ? "bg-sky-500 text-white" : "bg-amber-200 text-black"
        }
        `}>{product.tag}</p>
        </div>
      <div>
        <h3 className="text-2xl font-semibold">{product.name}</h3>
        <p className="text-gray-400 text-xl my-3">{product.description}</p>
        <p className="mt-5 font-bold text-3xl">${product.price}/{product.period}</p>
      </div>

      <div>

       <ul className="mt-4 text-gray-500">
        <li className="flex items-center gap-1"><Check />{product.features[0]}</li>
        <li className="flex items-center gap-1"><Check />{product.features[1]}</li>
        <li className="flex items-center gap-1"><Check />{product.features[2]}</li>
       </ul>

      </div>

      <button onClick={handlebuying} className={`btn w-full rounded-full m-3 text-white
        ${buying ? "bg-green-500 cursor-not-allowed" : "bg-[linear-gradient(to_right,#4F39F6,#9514FA)]"}`}>
        {
            buying ? "Added to Cart" : "Buy Now"
        }
        </button>
    </div>
  );
};

export default ProductCard;
