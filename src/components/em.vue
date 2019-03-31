<template>
  <div>
    <Test/>
    <h1>{{h}}</h1>
    <h1>{{l}}</h1>
  </div>
</template>
<script>
import Test from "./test";
export default {
    props:['h','l'],
  components: {
    Test
  },
  mounted() {}
};
</script>