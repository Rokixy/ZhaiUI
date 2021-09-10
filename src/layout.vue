<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>
<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {},
  name: "zh-layout",
  data() {
    return {
      layoutClass: { hasSider: false },
    };
  },
  mounted() {
    this.$children.forEach((vm) => {
      if (vm.$options.name === "zh-sider") {
        this.layoutClass.hasSider = true;
      }
    });
  },
});
</script>

<style lang="scss" scoped>
.layout {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  &.hasSider {
    flex-direction: row;
  }
}
</style>