<template>
  <div>
    <ul>
      <li v-for="item in menuList" :key="item.id">
        <router-link :to="item.url">{{item.name}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuList: require("../assets/data/menu.js")
    };
  }
};
</script>
<style scoped>
ul li a {
  display: inline-block;
  width: 100%;
  padding: 6px;
  background-color: aqua;
  cursor: pointer;
  border-bottom: 1px solid #ccc;
}
ul li a:hover {
  opacity: 0.9;
}
</style>