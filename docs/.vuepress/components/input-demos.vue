<template>
  <div class="wrapper">
    <zh-input></zh-input>
    <zh-input disabled value="禁用"></zh-input>
    <zh-input readonly value="只读"></zh-input>
    <zh-input error="错误信息"></zh-input>
    <zh-input :success="true"></zh-input>
    <zh-input tips="提示信息"></zh-input>
    <br />
    <zh-input v-model="xxx"></zh-input>
    <br />
    <span>value:&nbsp;{{ xxx }}</span>
  </div>
</template>

<script>
import Input from "../../../src/Input";
export default {
  data() {
    return { xxx: "双向绑定" };
  },
  components: { "zh-input": Input },
};
</script>

<style lang="scss" scoped>
@import "../styles/helper";
.wrapper {
  padding-top: $wrapper-top;
}
</style>