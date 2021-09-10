<template>
  <div class="grid-wrapper">
    <zh-row class="row">
      <zh-col class="item" span="24">col-24</zh-col>
    </zh-row>
    <zh-row>
      <zh-col class="item" span="12">col-12</zh-col>
      <zh-col class="item" span="12">col-12</zh-col>
    </zh-row>
    <zh-row class="row">
      <zh-col class="item" span="8">col-8</zh-col>
      <zh-col class="item" span="8">col-8</zh-col>
      <zh-col class="item" span="8">col-8</zh-col>
    </zh-row>
    <zh-row class="row">
      <zh-col class="item" span="6">col-6</zh-col>
      <zh-col class="item" span="6">col-6</zh-col>
      <zh-col class="item" span="6">col-6</zh-col>
      <zh-col class="item" span="6">col-6</zh-col>
    </zh-row>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/helper";
.grid-wrapper {
  > .row {
    padding: 0.2em;
    > .item {
      text-align: center;
      color: $font-color;
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