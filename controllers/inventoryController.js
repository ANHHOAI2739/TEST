import InventoryModel from '../models/inventoryModel.js';

const getAll = async (req, res) => {
  const products = await InventoryModel.find();
  res.json({
    data: products,
    message: 'Product',
  });
};
const inventoryCtrl = {
  getAll,
};
export default inventoryCtrl;
