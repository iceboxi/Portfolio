<template>
  <div class="container">
    <div class="terminalBox" :class="{bottomMargin: isShowControl}">
      <div v-if="isShowControl" class="controlContainer">
        <div class="redButton"></div>
        <a href="#" v-on:click.prevent="show = !show">
          <div class="yellowButton">ー</div>
        </a>
        <div class="greenButton"></div>
      </div>
      <h1 v-if="title">
        {{title}}
        <span class="animate-flicker">|</span>
      </h1>
      <transition name="fade">
        <div v-if="show">
          <slot></slot>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "TerminalBox",
  data: () => {
    return {
      show: true
    };
  },
  props: {
    title: {
      type: String
    },
    isShowControl: {
      type: Boolean,
      default: true
    }
  },
  components: {}
};
</script>

<style lang="scss" >
@import "@/css/const.scss";

.bottomMargin {
  margin-bottom: 80px;
}

.terminalBox {
  position: relative;
  background-color: $darkBackgroundColor;
  border-radius: 12px;
  padding: 45px 30px 30px 30px;
  color: $mainTextColor;

  &::before {
    content: "";
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 0;
    border-radius: 12px;
    box-shadow: 0px 12px 25px 0px rgba(0, 0, 0, 0.5);
    z-index: -1;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: $mainTitleColor;
    font-family: Menlo;
  }

  p {
    font-size: 1.1em;
    line-height: 1.8em;
  }

  .controlContainer {
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 8px;
    left: 16px;

    @mixin controlButton($color) {
      background-color: $color;
      border-radius: 50%/50%;
      width: 14px;
      height: 14px;
      margin-right: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: $color;
      font-size: 6px;
      font-weight: bold;

      @media #{$breakPointNormal} {
        &:hover {
          background-color: rgb(167, 167, 167);
        }
      }
    }

    .redButton {
      @include controlButton(#f7524d);
    }

    .yellowButton {
      @include controlButton(#fdbc2e);

      @media #{$breakPointNormal} {
        &:hover {
          background-color: #fdbc2e;
          color: rgb(58, 58, 58);
        }
      }
    }

    .greenButton {
      @include controlButton(#27ca41);
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
