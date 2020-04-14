<template>
  <div class="container preview">
    <div class="row" v-for="(item,index) in items" :key="index">
      <div class="col-sm-6">
        <div class="videoPreview">
          <video autoplay loop controls>
            <source :src="item.video" type="video/mp4">
          </video>
        </div>
      </div>
      <div class="col-sm-6 my-auto" :class="{'order-sm-first' : index%2!=0}">
        <terminal-box :is-show-control="false" class="mb" data-aos="fade-up">
          <h4>{{item.title}}</h4>
          <p class="des">{{item.description}}</p>
        </terminal-box>
      </div>
    </div>
  </div>
</template>

<script>
import TerminalBox from "@/components/TerminalBox.vue";
import "aos/dist/aos.css";
import AOS from "aos";

export default {
  name: "Preview",
  props: ["items"],
  components: { TerminalBox },
  mounted: function() {
    AOS.init({ once: true });
  }
};
</script>

<style lang="scss">
@import "@/css/const.scss";
.preview {
  .mb {
    margin-bottom: 0;
    @media #{$breakPointCompact} {
      margin-bottom: 40px;
    }
  }

  .videoPreview {
    position: relative;
    width: 253px;
    height: 508px;
    margin: auto;
    padding: 15px 0 0 0;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background: url("../image/iphonex_220.png");
      pointer-events: none;
    }

    &::after {
      content: "";
      position: absolute;
      top: 10px;
      left: 10px;
      right: 10px;
      bottom: 0px;
      border-radius: 28px;
      box-shadow: 0px 15px 25px 0px rgba(0, 0, 0, 0.5);
      pointer-events: none;
    }

    @media #{$breakPointCompact} {
      margin-bottom: 40px;
    }

    video {
      margin: 0 auto;
      display: block;
      width: 253px;
      height: 478px;
    }
  }
}
</style>
