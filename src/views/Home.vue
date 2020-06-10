<template>
  <div class="home">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src=
import Header from "../views/Header";

export default {
  name: "Home",
  components: { Header }
};
</script>
