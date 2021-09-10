<template>
  <div class="popover-wrapper">
    <zh-popover position="left">
      <template slot="content"> popover 中的内容 </template>
      <zh-button>左方显示内容</zh-button>
    </zh-popover>
    <zh-popover position="top">
      <template slot="content"> popover 中的内容 </template>
      <zh-button>上方显示内容</zh-button>
    </zh-popover>
    <zh-popover position="bottom">
      <template slot="content"> popover 中的内容 </template>
      <zh-button>下方显示内容</zh-button>
    </zh-popover>
    <zh-popover position="right">
      <template slot="content"> popover 中的内容 </template>
      <zh-button>右方显示内容</zh-button>
    </zh-popover>
    <zh-popover trigger="hover">
      <template slot="content"> popover 中的内容 </template>
      <zh-button>悬停鼠标 显示内容</zh-button>
    </zh-popover>
  </div>
</template>

<script>
import Popover from "../../../src/Popover";
import Button from "../../../src/Button";
export default {
  components: {
    "zh-popover": Popover,
    "zh-button": Button,
  },
};
</script>

<style lang="scss" scoped>
</style>