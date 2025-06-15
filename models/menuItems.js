const mongoose = require('mongoose');

const menuItemsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    taste: {
        type: String,
        enum: ['Sweet', 'Sour', 'Spicy']
    },
    is_drink: {
        type: Boolean,
        default: false
    },
    ingridients: {  // If this is a typo, fix it everywhere
        type: [String],
        default: []
    },
    num_sales: {
        type: Number,
        default: 0
    }
});

const MenuItem = mongoose.model('menuItems', menuItemsSchema);
module.exports = MenuItem;
