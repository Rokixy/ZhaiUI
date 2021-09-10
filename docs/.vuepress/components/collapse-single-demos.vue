<template>
  <div class="single-wrapper">
    <zh-collapse :selected.sync="selected" single>
      <zh-collapse-item title="标题1" name="1">1</zh-collapse-item>
      <zh-collapse-item title="标题2" name="2">2</zh-collapse-item>
      <zh-collapse-item title="标题3" name="3">3</zh-collapse-item>
    </zh-collapse>
  </div>
</template>

<script>
import Collapse from "../../../src/Collapse";
import CollapseItem from "../../../src/Collapse-item";
export default {
  components: {
    "zh-collapse": Collapse,
    "zh-collapse-item": CollapseItem,
  },
  data() {
    return {
      selected: ["1"],
    };
  },
};
</script>

<style lang="scss" scoped>
.single-wrapper {
  padding: 10px 0;
}
</style>