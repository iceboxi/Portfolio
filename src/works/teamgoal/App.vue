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
        name: "Qちゃん",
        subTitle: "猫の鳴き声",
        icon: require("@/image/icon/teamgoal.png"),
        description: `
        猫飼っています。男の子ですが、名前は「Qちゃん」です。<br>
        猫の鳴き声を真似してもいつも一切無視していました。たまにYoutubeで猫動画を見ているところ、すごく反応していました。
        もしかして人間の音域と猫のが全然違うかなと思って、じゃアプリで猫の鳴き声を出せば反応してくれるんよねと軽い気持ちでアプリを作りました。<br>
        遊び心満載のアプリです！ UIBezierPathとCALayerどこまで表現できるのかの挑戦です。
        `,
        copyright: "2018 Copyright ShenWen Yang",
        appStoreURL:
          "https://itunes.apple.com/jp/app/q%E3%81%A1%E3%82%83%E3%82%93/id1130228883?mt=8",
        previous: "note.html",
        next: "cafe.html",
        previews: [
          {
            video: require("@/video/juiker1.mov"),
            title: "2Dで3Dを表現",
            description:
              "UIBezierPathで各パーツを描画して、CAAnimationでPathとTransformを変化して、表情と3D効果を再現する"
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
            tags: ["個人開発"]
          },
          {
            title: "担当",
            tags: ["企画", "要件定義", "設計デザイン", "開発"]
          },
          {
            title: "Language",
            tags: ["Swift"]
          },
          {
            title: "Device",
            tags: ["iPhone", "iPad"]
          },
          {
            title: "Technology",
            tags: ["AVFoundation", "Fabric"]
          },
          {
            title: "Localization",
            tags: ["日本語", "英語", "中国語"]
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss">
</style>
