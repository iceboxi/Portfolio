<template>
  <div class="workDetail">
    <jumbo-header>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-sm-6">
            <img :src="icon" class="icon rellax" data-rellax-speed="-7">
          </div>
          <div class="col-sm-6 appInfo">
            <h1 class="appName rellax" data-rellax-speed="-7">{{name}}</h1>
            <div class="subTitle rellax" data-rellax-speed="-7">{{subTitle}}</div>
          </div>
        </div>
      </div>
    </jumbo-header>

    <terminal-box title="Introduction">
      <p v-html="description"></p>
    </terminal-box>

    <wide-box>
      <preview :items="previews"></preview>
    </wide-box>

    <wide-box is-background-transparent title="Screenshot">
      <div class="screenshotSection row">
        <div
          class="col-4 col-sm-4 col-md-2"
          v-for="(screenshot,index) in screenshots"
          :key="index"
          data-aos="fade-up"
          :data-aos-delay="50 * index"
        >
          <a data-fancybox="gallery" :href="screenshot.raw">
            <img :src="screenshot.thumbnail">
          </a>
        </div>
      </div>
    </wide-box>

    <wide-box is-background-transparent title="Download">
      <div class="downloadSection">
        <div class="row">
          <div class="col-sm-6 my-auto">
            <a id="appstore" class="appStore" :href="appStoreURL" target="_blank"></a>
          </div>
          <div class="col-sm-6 my-auto">
            <div id="qrcode" class="qrCode"></div>
          </div>
        </div>
      </div>
    </wide-box>

    <terminal-box title="Detail">
      <div class="skill">
        <div v-for="(detail,index) in details" :key="'g' + index">
          <skill-box :title="detail.title" :skills="detail.tags"></skill-box>
        </div>
      </div>
    </terminal-box>

    <div class="container">
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link" :href="previous">Previous</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :href="next">Next</a>
        </li>
      </ul>
    </div>

    <footer>
      <div class="copyright text-center">{{copyright}}</div>
    </footer>
  </div>
</template>

<script>
import SkillBox from "@/components/SkillBox.vue";
import TerminalBox from "@/components/TerminalBox.vue";
import JumboHeader from "@/components/JumboHeader.vue";
import WideBox from "@/components/WideBox.vue";
import Preview from "@/components/Preview.vue";
import QRCode from "qrcodejs2";
import Rellax from "rellax";
import $ from "jquery";
import fancybox from "@fancyapps/fancybox";
import "@fancyapps/fancybox/dist/jquery.fancybox.css";
import "aos/dist/aos.css";
import AOS from "aos";

export default {
  name: "WorkLayout",
  components: { TerminalBox, JumboHeader, WideBox, SkillBox, Preview },
  props: [
    "icon",
    "name",
    "subTitle",
    "description",
    "previews",
    "screenshots",
    "appStoreURL",
    "details",
    "copyright",
    "previous",
    "next"
  ],
  mounted: function() {
    new QRCode("qrcode", {
      text: this.appStoreURL,
      width: 200,
      height: 200,
      colorDark: "#000000",
      colorLight: "#F5F3EC"
    });
    new Rellax(".rellax");
  }
};
</script>

<style lang="scss">
@import "@/css/const.scss";

.appName {
  font-size: 3em;
  font-weight: 400;
  font-family: "Helvetica Neue";
  margin-bottom: 10px;
}

.subTitle {
  font-size: 2em;
  font-weight: 300;
}

.screenshotSection {
  img {
    width: 100%;
    margin-bottom: 12px;
    border-radius: 8% / 3.69%;
    transition: all 0.2s ease-in;

    @media #{$breakPointNormal} {
      &:hover {
        transform: scale(1.1) translateY(-10px);
      }
    }
  }
}
</style>
