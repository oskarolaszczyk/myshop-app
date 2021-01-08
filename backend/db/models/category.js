const mongoose = require('mongoose')
const URLSlugs = require('mongoose-url-slugs');

const categorySchema = new mongoose.Schema({
    name: {
          type: String
    },
}, {
   timestamps: true
});

categorySchema.plugin(URLSlugs('name', { field: 'slug', update: true }));

const Category = mongoose.model('Category', categorySchema);

module.exports = Category