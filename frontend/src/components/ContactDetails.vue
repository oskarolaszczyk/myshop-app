<template>
  <div class="container">
    <h2>Contact Details</h2>
    <form>
      <div class="form-group row ">
        <label for="inputTitle">User name</label>
        <!-- <div class="col-sm-8"> -->
          <input
            type="text"
            v-model="userName"
            class="form-control"
            placeholder="Enter your name"
          />
        <!-- </div> -->
      </div>
      <div class="form-group row">
        <label for="inputTitle">E-mail</label>
        <!-- <div class="col-sm-8"> -->
          <input
            type="text"
            v-model="email"
            class="form-control"
            placeholder="Enter your e-mail"
          />
        <!-- </div> -->
      </div>
      <div class="form-group row">
        <label for="inputTitle">Phone</label>
        <!-- <div class="col-sm-8"> -->
          <input
            type="text"
            v-model="phone"
            class="form-control"
            placeholder="Enter your phone number"
          />
        <!-- </div> -->
      </div>
      <div>
        <button
          class="btn btn-info col-sm-12 confirmdetailsbutton"
          type="button"
          v-on:click="emitDetails()"
        >
          Confirm details
        </button>

      </div>
  </form>
  </div>
</template>

<script>
export default {
  name: "ContactDetails",
  data: function () {
    return {
      userName: "",
      email: "",
      phone: "",
    };
  },
  methods: {
    emitDetails: function () {
      var details = {
        userName: this.userName,
        email: this.email,
        phone: this.phone,
      };
      this.$emit("details-event", details);
      document.querySelector(".confirmdetailsbutton").style.backgroundColor = "green";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .wrapper {
  justify-content: right;
} */
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