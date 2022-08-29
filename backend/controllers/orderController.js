import expressAsyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";

const addOrderItems = expressAsyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    taxPrice,
    totalPrice,
    shippingPrice,
  } = req.body;
  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No order items");
  } else {
    const order = new Order({
      orderItems,
      shippingAddress,
      user: req.user._id,
      paymentMethod,
      taxPrice,
      totalPrice,
      shippingPrice,
    });
    const newOrder = await order.save();
    res.status(201).json(newOrder);
  }
});

export { addOrderItems };
