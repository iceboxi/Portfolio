<template>
  <div id="app">
    <index-layout>
      <template slot="header">
        <div class="row align-items-center">
          <div class="col-sm-6 portfolio">
            <h1 class="rellax" data-rellax-speed="2">
              <ruby>陳
                <rt>Chen</rt>
              </ruby>&nbsp;
              <ruby>炳璋
                <rt>PingChang</rt>
              </ruby>
            </h1>
            <div class="rellax mt-4" data-rellax-speed="2">
              <div class="d-flex flex-column align-items-end">
                <p>iOS Enginner
                  <br>
                  <span style="font-size: 2em;font-weight:100;">×</span>
                  <br>軟體工程師
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <img src="@/image/portrait.png" class="portrait rellax" data-rellax-speed="-5">
          </div>
        </div>
      </template>

      <p slot="about">我是陳炳璋，我是一位軟體工程師
        <br>iOS開發經驗七年，熟悉團隊開發工作
        <br>無論是對UI/UX配合或是服務串接都相當有經驗
      </p>

      <template slot="timeline">
        <timeline :items="timeline"></timeline>
      </template>

      <template slot="works">
        <div class="row">
          <div class="col-sm-6 p-0" v-for="(work,index) in works" :key="index">
            <work-box v-bind="work"></work-box>
          </div>
        </div>
      </template>

      <template slot="skills">
        <skill-box title="Language" :grouped-skills="skills.language"></skill-box>
        <skill-box title="Framework" :grouped-skills="skills.framework"></skill-box>
        <skill-box title="Database" :skills="skills.database"></skill-box>
        <skill-box title="Other" :skills="skills.others"></skill-box>
      </template>

      <template slot="contact">
        <h5>
          iceboxi.dev@gmail.com
          <a style="font-size:1.5em" href="mailto:youremailaddress">✉︎</a>
        </h5>
      </template>

      <template slot="copyright">2018 Copyright ShenWen Yang. Design By Yang. Made with Vue.js</template>
    </index-layout>
  </div>
</template>

<script>
import IndexLayout from "@/components/IndexLayout.vue";
import Timeline from "@/components/Timeline.vue";
import WorkBox from "@/components/WorkBox.vue";
import SkillBox from "@/components/SkillBox.vue";
import Rellax from "rellax";

export default {
  name: "app",
  components: {
    IndexLayout,
    Timeline,
    WorkBox,
    SkillBox
  },
  mounted: function() {
    new Rellax(".rellax");
  },
  data: () => {
    return {
      works: [
        {
          title: "Juiker",
          detail: "以台版Line為目標，提供辦公室協作解決方案",
          icon: require("@/image/icon/juiker.png"),
          link: "juiker.html"
        },
        {
          title: "teamgoal!",
          detail: "協作與流程管理",
          icon: require("@/image/icon/teamgoal.png"),
          link: "teamgoal.html"
        },
        {
          title: "海大App",
          detail: "海洋大學官方App",
          icon: require("@/image/icon/ntou.png"),
          link: "https://play.google.com/store/apps/details?id=tw.edu.ntou"
        },
        {
          title: "TFAM",
          detail: "北美館官方App",
          icon: require("@/image/icon/tfam.png"),
          link: "https://apps.apple.com/tw/app/%E8%87%BA%E5%8C%97%E5%B8%82%E7%AB%8B%E7%BE%8E%E8%A1%93%E9%A4%A8-taipei-fine-arts-museum/id1000357466"
        },
        {
          title: "Actno名片家",
          detail: "名片辨識與線上交換系統",
          icon: require("@/image/icon/actno.png"),
          link: ""
        },
        {
          title: "Cafe2Go",
          detail: "整合電商行銷與行動裝置的B2B概念商品",
          icon: require("@/image/icon/cafe2go.png"),
          link: ""
        },
        {
          title: "MeshStorage",
          detail: "雲端備份軟體",
          icon: require("@/image/icon/MeshStorage.png"),
          link: ""
        }
      ],
      skills: {
        language: [
          { title: "Mobile", skills: ["Swift", "Objective-C", "Java"] },
          { title: "Web", skills: ["HTML", "CSS", "JavaScript"] },
          { title: "Backend", skills: ["PHP", "JSP"] }
        ],
        framework: [
          {
            title: "Mobile",
            skills: [
              "iBeacon",
              "Core Location",
              "MapKit",
              "Google Map SDK",
              "Autolayout",
              "Alamofire",
              "Realm",
              "OpenCV",
              "Parse",
              "SDWebImage",
              "Fabric",
              "CocoaPods",
              "Carthage"
            ]
          },
          {
            title: "Backend",
            skills: ["Parse server", "Firebase"]
          }
        ],
        database: ["MySQL", "SQLite", "Realm", "CoreData"],
        others: ["Git", "SVN", "JMeter", "AI & Machine Learning"]
      },
      timeline: [
        {
          title: "出生，台灣宜蘭",
          detail: "",
          date: "1986"
        },
        {
          title: "NTOU，資訊工程學系",
          detail:
            "大學期間，智慧型手機日漸發展，對APP開發產生興趣",
          date: "2005~2009"
        },
        {
          title: "華雋線上科技",
          detail: "手機軟體外包接案公司",
          date: "2011~2012"
        },
        {
          title: "NTOU，資訊工程研究所",
          detail: "精進軟工相關技能，在學期間協助開發海大App Android & Backend",
          date: "2012~2014"
        },
        {
          title: "源思科技",
          detail: "以打造台版Line為目標，結合電話與即時通訊，提供辦公室協作解決方案",
          date: "2014/09~2018/03"
        },
        {
          title: "遊戲橘子",
          detail: "資深工程師",
          date: "2019/04~"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "@/css/const.scss";

.portfolio {
  text-align: right;
  h1 {
    font-family: "Helvetica Neue";
    font-size: 4.5em;
    font-weight: 300;
  }
  p {
    text-align: center;
    margin-bottom: 0;
    font-size: 1.6em;
    font-weight: 300;
    line-height: 140%;
  }
}

.portrait {
  display: block;
  margin: 30px auto 0;
  margin-bottom: -80px;
  max-width: 100%;
}
</style>
