<template>
  <!-- <header class="header">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
  </header>-->
  <div>
    <div class="container-fluid main"></div>
    <nav class="navbar navbar-expand-md bg-dark navbar-dark">
      <a class="navbar-brand" @click="$router.push('/')">
        <img alt="logo" style="width:50px;" />
      </a>
      <p class="navbar-brand">{{this.userName}}</p>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav list">
          <li class="nav-item">
            <a class="btn btn-outline-success my-2 my-sm-0" @click="$router.push('feedback')">
              Add
              Feedback
            </a>
          </li>
          <li class="nav-item">
            <a class="btn btn-outline-danger my-2 my-sm-0" @click.prevent="logout">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      userName: ""
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/login");
    }
  },
  mounted() {
    this.userName = localStorage.getItem("userName");
  }
};
</script>

<style scoped>
.header {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
}
.header a {
  color: #fff;
  padding-right: 5px;
  text-decoration: none;
}
</style>
