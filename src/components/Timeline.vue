<template>
  <div class="timeline">
    <div class="timelineCell" v-for="(item,index) in items" :key="index">
      <div class="timelineDot"></div>
      <div class="timelineContent">
        <div
          data-aos-once="true"
          data-aos="fade-right"
          data-aos-offset="50"
          class="timelineDate"
        >{{item.date}}</div>
        <div data-aos="fade-up">
          <h5>{{item.title}}</h5>
          <div v-if="item.detail">{{item.detail}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "aos/dist/aos.css";
import AOS from "aos";

export default {
  name: "Timeline",
  components: {},
  props: {
    items: Array
  },
  mounted: function() {
    AOS.init({ once: true });
  }
};
</script>

<style lang="scss">
@import "@/css/const.scss";

$timeLineLeftOffset: 200px;
$timeLineLeftOffset_mobile: 20px;

.timeline {
  position: relative;
  padding: 40px 0;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    border-left: 1px solid $mianColor;
    left: $timeLineLeftOffset;

    @media #{$breakPointCompact} {
      left: $timeLineLeftOffset_mobile;
    }
  }

  .timelineCell {
    margin-bottom: 40px;

    .timelineDot {
      position: relative;
      float: left;
      margin-top: 5px;
      background-color: $mianColor;
      border-radius: 50%;
      height: 16px;
      width: 16px;
      margin-left: calc(#{$timeLineLeftOffset} - 8px + 0.5px);

      @media #{$breakPointCompact} {
        margin-left: calc(#{$timeLineLeftOffset_mobile} - 8px + 0.5px);
      }
    }

    .timelineContent {
      margin-left: calc(#{$timeLineLeftOffset} + 50px);

      @media #{$breakPointCompact} {
        margin-left: calc(#{$timeLineLeftOffset_mobile} + 50px);
      }

      h5 {
        font-size: 1.2em;
      }

      .timelineDate {
        position: absolute;
        text-align: right;
        left: 0;
        width: calc(#{$timeLineLeftOffset} - 50px);
        color: $subTextColor;

        @media #{$breakPointCompact} {
          position: relative;
          text-align: left;
          margin-bottom: 4px;
        }
      }
    }
  }
}
</style>
