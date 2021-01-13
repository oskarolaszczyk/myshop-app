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
      <div v-for="product in allProductsInCart" :key="product.name">{{product.name}}</div>
      <div>
        <button  class="btn btn-info col-sm-12 mt-20" @click="shareData()">Go to cart</button>
    </div>
    <Footer/>
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
div {
  margin-top: 15px;
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
