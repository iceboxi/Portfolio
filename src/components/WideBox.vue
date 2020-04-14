<template>
  <div
    class="container-fluid"
    :class="{lightGradientBackground : !isBackgroundTransparent, paddingTopBottom : !isBackgroundTransparent}"
  >
    <div class="container">
      <h1 v-if="title">
        {{title}}
        <span class="animate-flicker">|</span>
      </h1>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "WideBox",
  components: {},
  props: {
    title: String,
    isBackgroundTransparent: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
@import "@/css/const.scss";

.container-fluid {
  margin-bottom: $defaultButtonMargin;
}

.paddingTopBottom {
  padding: 80px 0;
}

.lightGradientBackground {
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: $lightGradientBackgroundColor;
    z-index: -999;
  }
}
</style>
