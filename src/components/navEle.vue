<template>
  <div></div>
</template>
<script>
import Test from "./test";
export default {
  mounted() {
    console.log(this.$router);
    console.log(this.$route);
    this.$layer.iframe({
      content: {
        content: Test, //传递的组件对象
        parent: this, //当前的vue对象
        data: {} //props
      },
      area: ["800px", "600px"],
      title: "Test123"
    });
  }
};
</script>