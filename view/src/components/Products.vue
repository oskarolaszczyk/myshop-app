<template>
<div>
  <div class="tab" id="tableFilms" ref="table">
      <table class="table-condensed table-hover">
        <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>buy</th>
        </tr>
        <tr v-for="product in filteredProducts" :key="product.name">
            <td>{{product.name}}</td>
            <td>{{product.description}}</td>
            <td>{{product.price}}</td>
            <td> <button class="buybutton btn btn-info col-sm-12" type="button" v-on:click="addToCart(product)"  > BUY </button> </td>
        </tr>
    </table>
  </div>
    <div>
      <button class="confirmbutton btn btn-info col-sm-12" type="button" v-on:click="makeAnOrder"> Confirm products </button>
    </div> 
  </div>
</template>

<script>
export default {
    name: 'Products',
    data: function() {
        return {
            productsInCart : [],
        }
    },
    methods: {
      addToCart: function (product) {
        var bool = false;
        for( var i = 0, length = this.productsInCart.length; i < length; i++) {
            if(this.productsInCart[i]._id == product._id) {
              bool = true;
            }
        }
        if (!bool) {
          this.productsInCart.push(product)

          document.querySelectorAll('.buybutton').forEach(function(e) {
          e.addEventListener('click', function() {
            this.style.backgroundColor = "red";
              })
            });
        }
      
      },
      makeAnOrder: function () {
        this.$emit("cart-event", this.productsInCart);
        document.querySelector(".confirmbutton").style.backgroundColor = "green";
      },
  },
    props: {
      filteredProducts: Array,
    },
}
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
div {
  margin-top: 20px;
}
button {
  margin-top: 20px;
}
</style>