const mongoose = require('mongoose')
const URLSlugs = require('mongoose-url-slugs');

const predifinedNames = ['phone', 'pc', 'laptop', 'gps']

const categorySchema = new mongoose.Schema({
    name: {
          type: String,
          lowercase: true,
          required: true,
          validate(value) {
            if (!predifinedNames.includes(this.name)) {throw new Error('Use predifiend names!')}
          }
    },
}, {
   timestamps: true
});

categorySchema.plugin(URLSlugs('name', { field: 'slug', update: true }));

const Category = mongoose.model('Category', categorySchema);

module.exports = Category
