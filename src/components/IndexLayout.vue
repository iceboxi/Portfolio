<template>
  <div>
    <jumbo-header style="margin-bottom:-130px;">
      <div class="container">
        <slot name="header"></slot>
      </div>
    </jumbo-header>
    <terminal-box title="About Me">
      <slot name="about"></slot>
    </terminal-box>
    <terminal-box title="Timeline">
      <slot name="timeline"></slot>
    </terminal-box>
    <wide-box title="Works">
      <slot name="works"></slot>
    </wide-box>
    <terminal-box title="Skills">
      <slot name="skills"></slot>
    </terminal-box>
    <terminal-box title="Contact">
      <slot name="contact"></slot>
    </terminal-box>
    <footer>
      <div class="copyright text-center">
        <slot name="copyright"></slot>
      </div>
    </footer>
  </div>
</template>

<script>
import TerminalBox from "@/components/TerminalBox.vue";
import JumboHeader from "@/components/JumboHeader.vue";
import WideBox from "@/components/WideBox.vue";
export default {
  name: "IndexLayout",
  components: {
    TerminalBox,
    JumboHeader,
    WideBox
  }
};
</script>

<style lang="scss">
@import "@/css/const.scss";
</style>
