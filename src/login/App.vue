<template>
  <div id="app">
    <div class="container verticalCenter p-0" style="min-height:100vh;">
      <terminal-box title="通關密碼">
        <p>請輸入密碼</p>
        <div class="boxContainter mb-5" :class="responseAnimation">
          <password-box :text="p1" class="dashed"></password-box>
          <password-box :text="p2" class="dashed"></password-box>
          <password-box :text="p3" class="dashed"></password-box>
          <password-box :text="p4" class="dashed"></password-box>
        </div>
        <p>點擊箭頭輸入密碼</p>
        <div class="boxContainter">
          <a href="#" @click.prevent="result +='↑'">
            <password-box text="↑" class="solid hoverAnimate"></password-box>
          </a>
          <a href="#" @click.prevent="result +='↓'">
            <password-box text="↓" class="solid hoverAnimate"></password-box>
          </a>
          <a href="#" @click.prevent="result +='←'">
            <password-box text="←" class="solid hoverAnimate"></password-box>
          </a>
          <a href="#" @click.prevent="result +='→'">
            <password-box text="→" class="solid hoverAnimate"></password-box>
          </a>
        </div>
      </terminal-box>
    </div>
  </div>
</template>

<script>
import TerminalBox from "@/components/TerminalBox.vue";
import PasswordBox from "@/components/PasswordBox.vue";
import "animate.css/animate.css";
import Cookies from "js-cookie";

export default {
  name: "app",
  components: {
    TerminalBox,
    PasswordBox
  },
  mounted: function() {},
  watch: {
    result: function(newVal, oldVal) {
      if (newVal.length == 4) {
        let answer = encodeURI(newVal);
        if (answer == this.correctAnswer) {
          Cookies.set("auth", true);
          location.href = "index.html";
        } else {
          this.responseAnimation = "animated shake";
          var vm = this;
          setTimeout(function() {
            vm.responseAnimation = "";
            vm.result = "";
          }, 1200);
        }
      }
    }
  },
  computed: {
    p1: function() {
      return this.result.charAt(0);
    },
    p2: function() {
      return this.result.charAt(1);
    },
    p3: function() {
      return this.result.charAt(2);
    },
    p4: function() {
      return this.result.charAt(3);
    }
  },
  data: () => {
    return {
      result: "",
      responseAnimation: "",
      correctAnswer: "%E2%86%91%E2%86%93%E2%86%90%E2%86%92"
    };
  }
};
</script>

<style lang="scss">
@import "@/css/const.scss";

.boxContainter {
  display: flex;
  margin: 20px 0;
  flex-wrap: wrap;
}

.hoverAnimate {
  transition: all 0.2s ease-in-out;

  @media #{$breakPointNormal} {
    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
