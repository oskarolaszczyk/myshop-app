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
            required: true,

      },
      price: {
            type: Number,
            min: 0.01,
            required: true,

      },
      weight: {
            type: Number,
            min: 0.01,
            required: true,

      },
      category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: Category
      }
      }, {
      timestamps: true
});

productSchema.plugin(URLSlugs('name', { field: 'slug', update: true }));

const Product = mongoose.model('Product', productSchema);

module.exports = Product