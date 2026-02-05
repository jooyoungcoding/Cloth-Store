"use client";

import React from "react";

const orders = [
  {
    id: 1,
    name: "Girls Pink Moana Printed Dress",
    size: "S",
    qty: 1,
    price: "$80.00",
    status: "delivered",
    image: "/products/product1.png",
  },
  {
    id: 2,
    name: "Women Textured Handheld Bag",
    size: "Regular",
    qty: 1,
    price: "$80.00",
    status: "inprocess",
    image: "/products/product1.png",
  },
  {
    id: 3,
    name: "Tailored Cotton Casual Shirt",
    size: "M",
    qty: 1,
    price: "$40.00",
    status: "inprocess",
    image: "/products/product1.png",
  },
  {
    id: 4,
    name: "Tailored Cotton Casual Shirt",
    size: "M",
    qty: 1,
    price: "$40.00",
    status: "inprocess",
    image: "/products/product1.png",
  },
];

const MyOrders = () => {
  return (
    <div className="max-h-[560px] overflow-y-auto font-LeagueSpartan-Light">
      {orders.map((order, index) => (
        <div key={order.id}>
          {/* Order item */}
          <div className="flex justify-between gap-6 p-6">
            {/* Left */}
            <div className="flex gap-4">
              <img
                src={order.image}
                alt={order.name}
                className="w-20 h-24 object-cover rounded"
              />

              <div className="text-black">
                <h3 className="font-medium">{order.name}</h3>
                <p className="text-sm text-gray-600">Size: {order.size}</p>
                <p className="text-sm text-gray-600">Qty: {order.qty}</p>
                <span className="font-semibold text-black">{order.price}</span>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col items-end justify-between">
              <div className="flex flex-col gap-3">
                <button className="w-[160px] px-4 py-2 text-sm border rounded-md hover:bg-gray-200 transition-colors text-black">
                  View Order
                </button>

                {order.status === "delivered" ? (
                  <button className="w-[160px] px-4 py-2 text-sm bg-black text-white rounded-md">
                    Write A Review
                  </button>
                ) : (
                  <button className="w-[160px] px-4 py-2 text-sm bg-red-400 text-white rounded-md">
                    Cancel Order
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="flex items-center gap-3 px-6 pb-6">
            {order.status === "delivered" ? (
              <>
                <span className="px-3 py-1 text-xs rounded bg-green-100 text-green-600">
                  Delivered
                </span>
                <p className="text-sm text-gray-600">
                  Your product has been delivered
                </p>
              </>
            ) : (
              <>
                <span className="px-3 py-1 text-xs rounded bg-yellow-100 text-yellow-600">
                  In Process
                </span>
                <p className="text-sm text-gray-600">
                  Your product has been Inprocess
                </p>
              </>
            )}
          </div>

          {/* Divider */}
          {index !== orders.length - 1 && <div className="border-t mx-6" />}
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
