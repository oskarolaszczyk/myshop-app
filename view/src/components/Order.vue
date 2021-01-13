<template>
  <div>
      <h2>Cart</h2>
    <div id="tableFilms" ref="table">
      <table class="table-condensed table-hover">
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th colspan="2">-/+</th>
          <th>REMOVE</th>
        </tr>
        <tr v-for="product in productsQuantity" :key="product.name">
          <td>{{ product.name }}</td>
          <td>{{ product.quantity }}</td>
          <td>{{ product.price * product.quantity }}</td>
          <td>
            <button
              class="btn btn-info col-sm-12"
              type="button"
              v-on:click="minus(product)"
            >
              -
            </button>
          </td>
          <td>
            <button
              class="btn btn-info col-sm-12"
              type="button"
              v-on:click="plus(product)"
            >
              +
            </button>
          </td>
          <td>
            <button
              class="btn btn-outline-danger btn-sm"
              type="button"
              v-on:click="deleteProduct(product)"
            >
            REMOVE
            </button>
          </td>
        </tr>
      </table>
    </div>
    <div>
      <h2>Total price: {{totalPrice}}</h2>
    </div>
    <div>
      <button class="confirmbutton btn btn-info col-sm-12" type="button" v-on:click="emitOrder">
        Confirm products
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Order",
  data: function () {
    return {
      productsQuantity: [],
      totalPrice: "0",
    };
  },
  props: {
    cartProducts: Array,
  },
  mounted: function () {
    for (var i = 0, length = this.cartProducts.length; i < length; i++) {
      var product = {
        _id: this.cartProducts[i]._id,
        name: this.cartProducts[i].name,
        price: this.cartProducts[i].price,
        quantity: "1",
      };
      this.productsQuantity.push(product);
    }
    this.updateTotalPrice();
  },
  methods: {
    plus: function (product) {
      for (var i = 0, length = this.productsQuantity.length; i < length; i++) {
        if (this.productsQuantity[i]._id == product._id) {
          this.productsQuantity[i].quantity++;
        }
      }
      this.updateTotalPrice();
    },
    minus: function (product) {
      for (var i = 0, length = this.productsQuantity.length; i < length; i++) {
        if (
          this.productsQuantity[i]._id == product._id &&
          this.productsQuantity[i].quantity > 0
        ) {
          this.productsQuantity[i].quantity--;
        }
      }
      this.updateTotalPrice();
    },
    deleteProduct: function (product) {
      for (var i = 0, length = this.productsQuantity.length; i < length; i++) {
        if (this.productsQuantity[i]._id == product._id) {
          this.productsQuantity.splice(i, 1);
          length--
        }
      }
      this.updateTotalPrice();      
    },
    updateTotalPrice: function () {
      var price = 0;
      for (var i = 0, length = this.productsQuantity.length; i < length; i++) {
          if(typeof(this.productsQuantity[i]) !== "undefined" || this.productsQuantity[i] !== null) {
            price+=this.productsQuantity[i].quantity * this.productsQuantity[i].price
          }
        }
        this.totalPrice = price;
    },
    emitOrder: function () {
      this.$emit("order-event", this.productsQuantity);
      document.querySelector(".confirmbutton").style.backgroundColor = "green";

    }  
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
table {
  width: 100%;
}

button {
  margin-top: 20px;
}
</style>