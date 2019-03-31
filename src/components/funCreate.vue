<template>
  <div>
    <vN :vnodes="defults" hehe/>
    <vN :vnodes="titles"/>
  </div>
</template>
<script>
export default {
  name: "fc",
  components: {
    vN: {
      functional: true,
      render: (h, ctx) => {
        console.log(ctx)
        return ctx.props.vnodes;
      }
    }
  },
  props: {
    defults: {
      type: Array
    },
    titles: {
      type: Array
    }
  }
};
</script>
