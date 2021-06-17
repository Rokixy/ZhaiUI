<template>
  <svg class="zh-icon" aria-hidden="true">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>
<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {},
  props: ["name"],
});
</script>
<style lang="scss" scoped>
.zh-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
