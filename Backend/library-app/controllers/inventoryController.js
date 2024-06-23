const { Inventory } = require('../models');

exports.createInventory = async (req, res) => {
  try {
    const inventory = await Inventory.create(req.body);
    res.status(201).json(inventory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getInventories = async (req, res) => {
  try {
    const inventories = await Inventory.findAll();
    res.status(200).json(inventories);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
