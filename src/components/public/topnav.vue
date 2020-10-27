<template>
  <div class="topnav">
      <div class="topnavLeft"><slot name="left"></slot></div>
      <div class="topnavCenter"><slot name="center"></slot></div>
      <div class="topnavRight"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "topnav",
};
</script>

<style scoped>
.topnav {
  display: flex;
  text-align: center;
  line-height: 44px;
}
.topnavCenter {
  width: 50%;
}
.topnavRight {
  width: 25%;
}
.topnavLeft {
  width: 25%;
}
</style>
