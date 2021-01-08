const { Decimal128 } = require('mongodb');
const mongoose = require('mongoose')
const URLSlugs = require('mongoose-url-slugs');
const Category = require('./category')

const productSchema = new mongoose.Schema({
      name: {
            type: String,
            lowercase: true,
            required: true,
            
      },
      description: {
            type: String,

      },
      price: {
            type: Decimal128,
      },
      weight: {
            type: Decimal128,
      },
      categories: {
            type: mongoose.Schema.Types.ObjectId,
            ref: Category
      }
      }, {
      timestamps: true
});

productSchema.plugin(URLSlugs('name', { field: 'slug', update: true }));

const Product = mongoose.model('Product', productSchema);

module.exports = Product