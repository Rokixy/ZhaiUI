<template>
  <div class="gutter-wrapper">
    <zh-row gutter="30">
      <zh-col class="item" span="8"> <span> col-8; gutter-30;</span> </zh-col>
      <zh-col class="item" span="8"> <span> col-8; gutter-30;</span> </zh-col>
      <zh-col class="item" span="8"> <span> col-8; gutter-30;</span> </zh-col>
    </zh-row>
    <zh-row gutter="20">
      <zh-col class="item" span="8"> <span> col-8; gutter-20;</span> </zh-col>
      <zh-col class="item" span="8"> <span> col-8; gutter-20;</span> </zh-col>
      <zh-col class="item" span="8"> <span> col-8; gutter-20;</span> </zh-col>
    </zh-row>
    <zh-row gutter="10">
      <zh-col class="item" span="8"> <span> col-8; gutter-10;</span> </zh-col>
      <zh-col class="item" span="8"> <span> col-8; gutter-10;</span> </zh-col>
      <zh-col class="item" span="8"> <span> col-8; gutter-10;</span> </zh-col>
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
.gutter-wrapper {
  padding-top: $wrapper-top;
  .item {
    text-align: center;
    color: $font-color;
    > span {
      display: block;
      background: $background;
    }
  }
}
</style>