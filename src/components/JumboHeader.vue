<template>
  <div>
    <div class="container-fluid jumboHeader">
      <div class="bg"></div>
      <slot></slot>
      <div class="bottomLine"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JumboHeader",
  components: {}
};
</script>

<style lang="scss">
@import "@/css/const.scss";

.jumboHeader {
  background: transparent;
  position: relative;
  overflow: hidden;
  color: white;
  margin-bottom: $defaultButtonMargin;
  padding: 80px 0;

  h1 {
    color: #3f3f3f;
  }

  .bottomLine {
    position: absolute;
    height: 8px;
    background-color: $darkBackgroundColor;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0px -1px 5px 0px rgba(0, 0, 0, 0.5);
  }

  .bg {
    position: absolute;
    z-index: -1;
    background: linear-gradient(#fff6dc, #7dc4d9);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>
