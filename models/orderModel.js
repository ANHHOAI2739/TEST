import mongoose, { Schema } from 'mongoose';

const OrderSchema = new Schema({
  item: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const OrderModel = mongoose.model('orders', OrderSchema);
export default OrderModel;
