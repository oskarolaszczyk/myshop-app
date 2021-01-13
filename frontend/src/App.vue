<template>
  <div id="app" class="container">
    <h1 id="header">SHOP</h1>
    <div class="hr"></div>
    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'App',
    data: function() {
        return {
            allProducts : [],
            allProductsFiltered : [],
            allCategories : [],
        }
    },
}
</script>

<style>
  h1 {
    margin-top: 30px;
    margin-bottom: 20px;
    text-transform: uppercase;
  }

  #header {
        font-size: 50px;
        font-weight: 900;
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

   .hr {
    border-bottom: 1px solid #dbdbdb;
    margin: 3em 0;
  }

</style>
