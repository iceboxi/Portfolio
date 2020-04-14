<template>
  <div class="work" data-aos="fade-up">
    <a :href="link" :target="link.indexOf('http') !== -1 ? '_blank' : '_self'">
      <div class="workCard">
        <img :src="icon" class="icon">
        <h4>{{title}}</h4>
        <div>{{detail}}</div>
      </div>
    </a>
  </div>
</template>

<script>
import "aos/dist/aos.css";
import AOS from "aos";

export default {
  name: "WorkBox",
  props: ["icon", "title", "detail", "link"],
  mounted: function() {
    AOS.init({ once: true });
  }
};
</script>

<style lang="scss">
@import "@/css/const.scss";

.work {
  position: relative;
  padding: 12px;
  color: $darkTextColor;
  font-family: Menlo;

  h4 {
    margin-top: 8px;
    color: $darkTextColor;
    font-family: "Helvetica Neue";
  }

  .workCard {
    background: rgb(255, 253, 247);
    border-radius: 6px;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    transition: all 0.2s ease-in;
    padding: 20px;

    @media #{$breakPointNormal} {
      &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 15px 35px 0px rgba(0, 0, 0, 0.1);
      }
    }
  }

  .icon {
    width: 115px;
    height: 115px;
    border-radius: 25px;
    margin: 0;
    margin-right: 20px;
    border: 1px solid #e4e4e4;
    float: left;
    display: block;

    @media #{$breakPointCompact} {
      width: 69px;
      height: 69px;
      border-radius: 17px;
    }
  }
}
</style>
