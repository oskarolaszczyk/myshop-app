const { Decimal128 } = require('mongodb');
const mongoose = require('mongoose')
const URLSlugs = require('mongoose-url-slugs');
const OrderStatus = require('./order-status')
const Product = require('./product')

const orderSchema = new mongoose.Schema({
      date: {
            type: Date,
            required: false,
            
      },
      orderStatus: {
            //TODO dodac walidacja
            type: mongoose.Schema.Types.ObjectId,
            ref: OrderStatus

      },
      userName: {
            type: String,
            required: true,

      },
      email: {
            type: String,
            required: true,
      },
      phone: {
            type: String,
            required: true,
            validate(val) {
                  const phoneForm = /^\d{9}$/;
                  if (!this.phone.match(phoneForm)) {throw new Error('Wrong number type!')}
            },

      },
      products: [{
            product_id : {
                  type: mongoose.Schema.Types.ObjectId,
                  ref: Product,
      
            },
            count: {
                  type: Number,
                  default: 1,
                  min: 1
            },
      }]
      }, {
      timestamps: true
});

//orderSchema.plugin(URLSlugs('name', { field: 'slug', update: true }));

const Order = mongoose.model('Order', orderSchema);

module.exports = Order