<template>
  <div class="passwordBox">{{text}}</div>
</template>

<script>
export default {
  name: "PassowrdBox",
  components: {},
  props: ["text"]
};
</script>

<style lang="scss">
@import "@/css/const.scss";
.passwordBox {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  width: 56px;
  margin: 0 12px 8px 0;
  border-radius: 10px;
  font-size: 26px;
  font-weight: 500;
  font-family: "Helvetica Neue";

  &[class~="solid"] {
    border: 1.5px solid $mainTextColor;
  }

  &[class~="dashed"] {
    border: 1.5px dashed $mainTextColor;
  }
}
</style>
