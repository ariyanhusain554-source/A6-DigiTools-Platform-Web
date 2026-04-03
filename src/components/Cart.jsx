import React from "react";


const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handleDelete = (item) => {
    const filteredArray = carts.filter((c) => c.id !== item.id);
    setCarts(filteredArray);
  };

  const handlePayment = () => {
    setCarts([]);
  };

  return (
    <div className="shadow-lg rounded-lg border overflow-hidden border-zinc-300 space-y-3">
      <h1 className="text-2xl font-semibold">Your Cart</h1>

      {carts.length === 0 ? (
        <p className="text-center font-bold text-2xl p-5">Cart is empty</p>
      ) : (
        <>
          <div className="space-y-5 mt-4">
            {carts.map((item) => (
              <div
                className="flex items-center justify-between border rounded-lg p-3"
                key={item.id}
              >
                <div className="flex  items-center gap-2">
                  <div>
                    <img className="h-10 w-10 object-contain" src={item.icon} />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold">{item.name}</h2>
                  </div>
                </div>

                <div className="flex gap-10">
                  <div className="text-3xl font-bold">
                    ${item.price}/{item.period}
                  </div>

                  <button
                    onClick={() => handleDelete(item)}
                    className=" btn rounded-full text-red-500 "
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className=" flex justify-between p-5 mt-2 rounded-lg text-3xl font-semibold">
            <div>Total</div>
            <div>${totalPrice}</div>
          </div>

          <button onClick={() => handlePayment()} className="btn bg-[linear-gradient(to_right,#4F39F6,#9514FA)] w-full mt-2 mb-5 text-white text-2xl rounded-lg">
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
