<template>
  <div id="app">
    <work-layout v-bind="info"></work-layout>
  </div>
</template>

<script>
import WorkLayout from "@/components/WorkLayout.vue";

export default {
  name: "app",
  components: { WorkLayout },
  data: () => {
    return {
      info: {
        name: "teamgoal!",
        subTitle: "企業溝通與進度流程管理系統",
        icon: require("@/image/icon/teamgoal.png"),
        description: `
        teamup!提供企業多項友善且好用的服務
          1.建立多元的群組類型，溝通管理更有效
          2.目標管理，隨時掌握進度，快速上手
          3.建立人脈網絡，掌握資源更簡單
          4.私聊建立人脈清單，使溝通更有效率
          5.企業服務，整合企業原有資源，深化企業與員工間的黏著度
        `,
        copyright: "Gamania Co., Ltd.",
        appStoreURL: "",
        previous: "juiker.html",
        next: "",
        previews: [
          {
            video: require("@/video/tgOverall.mov"),
            title: "個人化企業協同工具",
            description:
              "個人資訊與工作所需工具盡在掌中"
          },
          {
            video: require("@/video/tgGroup.mov"),
            title: "專案與單位群組",
            description:
              "工作資訊分享、訊息瀑布與獨立行事曆"
          },
          {
            video: require("@/video/tgOrg.mov"),
            title: "組織圖",
            description:
              "公司組織圖象化顯示，單位緊急訊息快速佈達"
          },
          {
            video: require("@/video/tgTodo.mov"),
            title: "工作管理",
            description:
              "精準掌握工作進程與專案溝通"
          },
          {
            video: require("@/video/tgVoip.mov"),
            title: "遠端工具",
            description:
              "線上會議與VoIP功能，遠端溝通無遠佛屆"
          },
          {
            video: require("@/video/tgH5.mov"),
            title: "企業擴充",
            description:
              "快速擴充額外工具，串接各方服務"
          }
        ],
        screenshots: [
          {
            thumbnail: require("@/image/screenshot/teamgoal1.jpg"),
            raw: require("@/image/screenshot/teamgoal1.jpg")
          },
          {
            thumbnail: require("@/image/screenshot/teamgoal2.jpg"),
            raw: require("@/image/screenshot/teamgoal2.jpg")
          },
          {
            thumbnail: require("@/image/screenshot/teamgoal3.jpg"),
            raw: require("@/image/screenshot/teamgoal3.jpg")
          },
          {
            thumbnail: require("@/image/screenshot/teamgoal4.jpg"),
            raw: require("@/image/screenshot/teamgoal4.jpg")
          }
        ],
        details: [
          {
            title: "種類",
            tags: ["公司產品"]
          },
          {
            title: "負責",
            tags: ["開發", "維護", "架構設計", "需求分析"]
          },
          {
            title: "Language",
            tags: ["Swift", "Objective-C"]
          },
          {
            title: "Device",
            tags: ["iPhone"]
          },
          {
            title: "Technology",
            tags: ["Signal-R", "WKWebKit", "Fabric"]
          },
          {
            title: "Localization",
            tags: ["繁體中文"]
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss">
</style>
