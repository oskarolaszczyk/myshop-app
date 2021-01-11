<template>
  <div id="cart" class="container">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Order  :cartProducts='products'
            @order-event="handleOrderedProducts"  
    />
    <ContactDetails
          @details-event="handleDetails"        
    />
    <div><p>details</p></div>
    <div><p>{{details}}</p></div>
    <div><p>orderedProducts</p></div>
    <div><p>{{orderedProducts}}</p></div>

    <button class="btn btn-info col-sm-12" type="button" v-on:click="makeOrder()">Make an order</button>

    <div><p>order</p></div>
    <div><p>{{order}}</p></div>

    <Footer/>
  </div>
</template>

<script>
import Order from '../components/Order.vue'
import Footer from '../components/Footer'
import ContactDetails from '../components/ContactDetails'
//import axios from 'axios';


export default {
  name: 'Cart',
  components: {
    Order,
    Footer,
    ContactDetails
  },
    data: function() {
        return {
          details : "",
          products : [],
          orderedProducts : [],
        }
    },
    created() {
      this.products = this.$route.params.data
    },  
  methods: {
    handleDetails: function (data) {
      this.details = data;
    },
    handleOrderedProducts: function (data) {
      this.orderedProducts = data;
    },
    makeOrder: function () {
      this.order = {
        date: new Date(),
        //orderStatus: "5ff8a01cd46aeb48742770f0",
        userName: this.details.userName,
        email: this.details.email,
        phone: this.details.phone,
        products: this.orderedProducts,
      }
    },
    /*
    sendOrder: function () {
       axios
          .post('http://127.0.0.1:3000/orders', this.order )
    },
    */
  }
}
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