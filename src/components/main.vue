<template>
  <div id="wrap">
    <div id="leftMenu">
      <Menu/>
    </div>
    <div id="container">
      <Map/>
    </div>
    <router-view id="demo"></router-view>
  </div>
</template>
<script>
import Map from "./map";
import FunCreate from "./funCreate";
import Menu from "./menu";
import test from "./test";
export default {
  components: {
    Map,
    Menu
  },
  methods: {
    Openlayer() {
      //   this.$layer.iframe({
      //     content: {
      //       content: FunCreate, //传递的组件对象
      //       parent: this, //当前的vue对象
      //       data: {
      //         defults: [
      //           this.$createElement("p", "defults"),
      //           this.$createElement("p", "12")
      //         ],
      //         titles: [this.$createElement("h1", "titles")]
      //       } //props
      //     },
      //     area: ["800px", "600px"],
      //     title: "funCreate"
      //   });
      this.$layer.iframe({
        content: {
          content: test, //传递的组件对象
          parent: this, //当前的vue对象
          data: {} //props
        },
        area: ["800px", "600px"],
        title: "test"
      });
    }
  }
};
</script>
<style scoped>
#wrap {
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
}
#leftMenu {
  width: 200px;
  /* background-color: skyblue; */
}
#container {
  flex: 1;
  overflow: hidden;
  /* background-color: aquamarine; */
}
#demo {
  position: fixed;
  top: 100px;
  left: 300px;
  z-index: 99999999;
}
</style>
