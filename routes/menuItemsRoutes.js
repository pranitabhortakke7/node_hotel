const express = require('express');
const router = express.Router();
const menuItems = require('./../models/menuItems');

router.post('/menuItems', async (req, res) => {
    try {
        const menudata = req.body;
        const menu = new menuItem(menudata); // ✅ fixed
        const menu_data = await menu.save();
        console.log('Menu item saved');
        res.status(200).json(menu_data);
    } catch (err) {
        console.error('Save failed:', err.message);
        res.status(500).json({ error: 'internal server error' });
    }
});

router.get('/menuItems', async (req, res) => {
    try {
        const menudata = await menuItem.find(); // ✅ fixed
        console.log('data fetched');
        res.status(200).json(menudata);
    } catch (error) {
        console.error('Error fetching menuItems:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;