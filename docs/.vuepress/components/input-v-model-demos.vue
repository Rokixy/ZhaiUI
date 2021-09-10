<template>
  <div class="input-wrapper">
    <zh-input v-model="value"></zh-input>
    <br />
    value:{{ value }}
  </div>
</template>

<script>
import Input from "../../../src/Input";
export default {
  components: {
    "zh-input": Input,
  },
  data() {
    return {
      value: "双向绑定",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/helper";
.input-wrapper {
  padding-top: $wrapper-top;
}
</style>