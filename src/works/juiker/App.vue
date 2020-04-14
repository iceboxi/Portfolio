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
        name: "Juiker",
        subTitle: "打造出台版Line",
        icon: require("@/image/icon/juiker.png"),
        description: `
        Juiker 揪科是台灣第一個為政府與企業單位打造的即時通訊軟體，注重安全隱私的溝通，不僅可以讓您與親友同事輕鬆通話、傳送訊息及分享檔案，更提供企業通訊錄、企業聊天室、企業社團與公告等多元服務，讓您在職場溝通暢行無阻！<br>

        Juiker 揪科的特色：<br>
          *智慧判斷通話模式與計算費率，輕鬆省話費<br>
          *電腦、手機跨裝置使用<br>
          *群組傳訊、聊天<br>
        除了豐富的個人服務外，還有更進階的企業專屬服務：<br>
          *打造企業專屬通訊錄，快速查詢與聯絡<br>
          *加入企業社團，員工互動更密切<br>
          *發佈企業公告，快速佈達企業訊息<br>
        `,
        copyright: "© ITRI",
        appStoreURL:
          "https://apps.apple.com/tw/app/juiker/id527138436?l=zh",
        previous: "",
        next: "teamgaol.html",
        previews: [
          {
            video: require("@/video/juiker1.mov"),
            title: "即時訊息",
            description:
              "使用XMPP技術輔以RESTful API，快速溝通不漏訊"
          },
          {
            video: require("@/video/juiker2.mov"),
            title: "雙向溝通",
            description:
              "撥打網路電話或是二類電信，讓無網路環境也可以正常通話，並節省話費"
          },
          {
            video: require("@/video/juiker3.mov"),
            title: "企業群組與電話簿",
            description:
              "到職自動加入與離職自動退出，權限自動控管，個資不外洩"
          }
        ],
        screenshots: [
          {
            thumbnail: require("@/image/screenshot/juiker1.png"),
            raw: require("@/image/screenshot/juiker1.png")
          },
          {
            thumbnail: require("@/image/screenshot/juiker2.png"),
            raw: require("@/image/screenshot/juiker2.png")
          },
          {
            thumbnail: require("@/image/screenshot/juiker3.png"),
            raw: require("@/image/screenshot/juiker3.png")
          },
          {
            thumbnail: require("@/image/screenshot/juiker4.png"),
            raw: require("@/image/screenshot/juiker4.png")
          },
          {
            thumbnail: require("@/image/screenshot/juiker5.png"),
            raw: require("@/image/screenshot/juiker5.png")
          }
        ],
        details: [
          {
            title: "種類",
            tags: ["公司產品"]
          },
          {
            title: "負責項目",
            tags: ["開發", "維護", "架構設計", "需求定義"]
          },
          {
            title: "Language",
            tags: ["Swift"]
          },
          {
            title: "Device",
            tags: ["iPhone", "Mac OS X"]
          },
          {
            title: "Technology",
            tags: ["XMPP", "VoIP", "Core Data", "Fabric"]
          },
          {
            title: "Localization",
            tags: ["繁体中文", "英文", "简体中文", "俄文", "印度尼西亞文", "德文", "日文", "法文", "波蘭文", "泰文", "葡萄牙文", "西班牙文", "越南文", "韓文" , "馬來文"]
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss">
</style>
