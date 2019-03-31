<template>
  <div>
    <vN :defults="defults()" :titles="titles()"/>
    <test/>
  </div>
</template>

<script>
import test from "./test";
import vN from "./funCreate";
export default {
  name: "HelloWorld",
  mounted() {
    console.log(this);
  },
  components: {
    vN,
    test
  },
  props: {
    msg: String
  },
  methods: {
    defults() {
      return [
        this.$createElement("p", "defults"),
        this.$createElement("p", "12")
      ];
    },
    titles() {
      return [this.$createElement("h1", "titles")];
    }
  }
};
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
