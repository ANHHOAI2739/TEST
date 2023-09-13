import mongoose, { Schema } from 'mongoose';

const InventorySchema = new Schema({
  sku: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  instock: {
    type: Number,
    required: true,
  },
});

const InventoryModel = mongoose.model('inventorys', InventorySchema);
export default InventoryModel;
