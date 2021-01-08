const mongoose = require('mongoose')
const URLSlugs = require('mongoose-url-slugs');

const predinedNames = ['not approved', 'approved', 'canceled', 'completed']
const ordersStatusSchema = new mongoose.Schema({
    name: {
          type: String,
          lowercase: true,
          required: true,
          validate(value) {
            if (!predfinedNames.includes(this.value)) {throw new Error('Use predifiend names!')}
          }
    },
}, {
   timestamps: true
});

ordersStatusSchema.plugin(URLSlugs('name', { field: 'slug', update: true }));

const OrderStatus = mongoose.model('OrderStatus', ordersStatusSchema);

module.exports = OrderStatus