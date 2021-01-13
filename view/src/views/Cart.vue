<template>
  <div id="cart" class="container">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Order  :cartProducts='products'
            @order-event="handleOrderedProducts"  
    />
    <ContactDetails
          @details-event="handleDetails"        
    />
    <button class="btn btn-info col-sm-12" type="button" v-on:click="makeOrder()">Make an order</button>
    <div><p>{{order}}</p></div>
    <button class="btn btn-info col-sm-12" type="button" v-on:click="sendOrder()">Send an order</button>

    <Footer/>
  </div>
</template>

<script>
import Order from '../components/Order.vue'
import Footer from '../components/Footer'
import ContactDetails from '../components/ContactDetails'
import axios from 'axios';


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
          productsList : [],
          order : "",
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
      for(var i = 0, length = this.orderedProducts.length; i<length;i++){
        this.productsList.push({product_id: this.orderedProducts[i]._id, count:this.orderedProducts[i].quantity})
      }
      this.order = 
      {
        date: new Date(),
        orderStatusID: "5ff8a01cd46aeb48742770f0",
        userName: this.details.userName,
        email: this.details.email,
        phone: this.details.phone,
        products: this.productsList,
      }

    },
    sendOrder: function () {
      if(this.validateOrder()){
       axios.post('http://127.0.0.1:3000/orders', this.order )
       .then((res)=> {
         console.warn(res);
       })
       alert("Order accepted")
       this.$router.push({ name: "MainPage"});
      }
    },
    validateOrder: function () {
      if (
          typeof(this.order.phone) == 'undefined' || 
          !this.order.phone.match(/^\d{9}$/) 
          ) { 
            alert("Order declined. Bad phone.")
            return false; 
          }
      if (
          typeof(this.order.userName) == 'undefined' || 
          this.order.userName == null || 
          this.order.userName == ""  
          ) { 
            alert("Order declined. Bad user name.")
            return false; 
          }
      if (
          typeof(this.order.email) == 'undefined' || 
          this.order.email == null || 
          this.order.email == "" 
          ) { 
            alert("Order declined. Bad email.")
            return false; 
          }
      if (
          typeof(this.order.products) == 'undefined' || 
          !this.order.products.length > 0 
           ) { 
            alert("Order declined. There is no products in cart.")
            return false; 
          }
      return true;
    },
    
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
  button {
    margin-top: 20px;
  }
  div {
    margin-top: 20px;
  }

  #cart {
    margin-top: 2em;
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