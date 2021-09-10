<template>
  <div class="offset-wrapper">
    <zh-row class="row">
      <zh-col class="item" span="8"> <span>col-8</span> </zh-col>
      <zh-col class="item" span="8"> <span>col-8</span> </zh-col>
      <zh-col class="item" span="4" offset="4"> <span>col-4</span> </zh-col>
    </zh-row>
    <zh-row class="row">
      <zh-col class="item" span="8"> <span>col-8</span> </zh-col>
      <zh-col class="item" span="5" offset="3"> <span>col-5</span> </zh-col>
      <zh-col class="item" span="4" offset="4"> <span>col-4</span> </zh-col>
    </zh-row>
    <zh-row class="row">
      <zh-col class="item" span="2" offset="6"> <span>col-2</span> </zh-col>
      <zh-col class="item" span="5" offset="3"> <span>col-5</span> </zh-col>
      <zh-col class="item" span="4" offset="4"> <span>col-4</span> </zh-col>
    </zh-row>
  </div>
</template>

<script>
  import Col from '../../../src/Col'
  import Row from '../../../src/Row'
  export default {
    components: {
      'zh-col': Col,
      'zh-row': Row
    }
  }
</script>

<style lang="scss" scoped>
  @import "../styles/helper";
  .offset-wrapper { padding-top: $wrapper-top;
    > .row {
      > .item { text-align: center; color: $font-color;
        > span { display: block; background: $background; }
      }
    }
  }
</style>