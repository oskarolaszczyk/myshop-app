<template>
  <form>
    <div class="form-group">
      <input type="text" v-model="inputTitle" class="form-control" placeholder="Enter a name of the product"/>
    </div>
    <div>
    <select name="LeaveType" v-model="leaveType" @change="onChange()"
      class="form-control form-control-sm-12 btn-info">
      <option value="brak">  </option>
      <option v-for="category in categories" v-bind:key="category.name" :value="category._id">{{category.name.toUpperCase()}}</option>
    </select>
    </div>
    <div style="height: 15px;"></div>
    <div>
      <button class="btn btn-info col-sm-12 mt-20" type="button" v-on:click="search">Search</button>
    </div>
  </form>
  
</template>

<script>
import _ from 'underscore';

export default {
    name: 'FilterResult',
    data: function() {
        return {
            products : [],
            inputTitle: "",
            leaveType: "",
        }
    },
    methods: {
      search: function () {
        let self = this;
        let listEmitted = this.productsToFilter
        
        listEmitted = _.filter(this.productsToFilter, function (product) {
          if(     (self.inputTitle === "" || product.name.toLowerCase().includes(self.inputTitle.toLowerCase())) &&
                  (self.leaveType === "" || self.leaveType === "brak" || product.category[0]._id == self.leaveType)
          ) {
            return true;
          }
            else return false;
          });     
        this.$emit("search-event", listEmitted);
      },
        onChange: function () {

            console.log('The new value is: ', this.leaveType)
        },
  },
      props: {
        productsToFilter: Array,
        categories : Array,
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
</style>