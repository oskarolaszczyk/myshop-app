<template>
  <div id="mainpage" class="container">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <FilterResult
      :productsToFilter="allProducts"
      :categories="allCategories"
      @search-event="handleFilter"
    />
    <Products
      :filteredProducts="allProductsFiltered"
      @cart-event="handleCart"
    />
    <Footer />
  
      <div id="tableFilms2" ref="table3">
      <table class="table-condensed table-hover">
        <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>id</th>
            <th>buy</th>
        </tr>
        <tr v-for="product in allProductsInCart" :key="product.name">
            <td>{{product.name}}</td>
            <td>{{product.description}}</td>
            <td>{{product.price}}</td>
            <td>{{product.category[0]._id}}</td>
        </tr>
    </table>
  </div>
      <button @click="shareData()">button</button>
  </div>
</template>

<script>
import Products from "../components/Products.vue";
import Footer from "../components/Footer.vue";
import FilterResult from "../components/FilterResult";
import axios from "axios";

export default {
  name: "MainPage",
  components: {
    Products,
    Footer,
    FilterResult,
  },
  data: function () {
    return {
      allProducts: [],
      allProductsFiltered: [],
      allCategories: [],
      allProductsInCart: [],
    };
  },
  mounted: function () {
    var self = this;
    axios.get("http://127.0.0.1:3000/products").then((res) => {
      self.allProducts = res.data.data;
      self.allProductsFiltered = res.data.data;
    });
    axios.get("http://127.0.0.1:3000/categories").then((res) => {
      self.allCategories = res.data.data;
    });
  },
  methods: {
    handleFilter: function (data) {
      this.allProductsFiltered = data;
    },
    handleCart: function (data) {
      this.allProductsInCart = data;
    },
    shareData: function () {
      this.$router.push({ name: "Cart", params: { data: this.allProductsInCart } });
    },
  },
};
</script>

<style>
h1 {
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 35px;
  text-transform: uppercase;
}

h2 {
  margin-top: 20px;
  font-size: 25px;
  text-transform: uppercase;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
