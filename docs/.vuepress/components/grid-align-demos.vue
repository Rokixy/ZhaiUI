<template>
  <div class="align-wrapper">
    <zh-row class="row" align="left">
      <zh-col class="item" span="8">left</zh-col>
      <zh-col class="item" span="8">left</zh-col>
    </zh-row>
    <zh-row class="row" align="center">
      <zh-col class="item" span="8">center</zh-col>
      <zh-col class="item" span="8">center</zh-col>
    </zh-row>
    <zh-row class="row" align="right">
      <zh-col class="item" span="8">right</zh-col>
      <zh-col class="item" span="8">right</zh-col>
    </zh-row>
  </div>
</template>

<script>
import Col from "../../../src/Col";
import Row from "../../../src/Row";
export default {
  components: {
    "zh-col": Col,
    "zh-row": Row,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/helper";
.align-wrapper {
  text-align: center;
  color: $font-color;
  .row {
    padding-top: $wrapper-top;
    > .item {
      text-align: center;
      &:nth-child(odd) {
        background: $background;
      }
      &:nth-child(even) {
        background: lighten($background, 20%);
        color: $font-color;
      }
    }
  }
}
</style>