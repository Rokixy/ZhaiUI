<template>
  <div class="zh-button-group">
    <slot></slot>
  </div>
</template>
<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {},
});
</script>
<style lang="scss" scoped>
.zh-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .zh-button {
    border-radius: 0;
    margin-left: -1px;
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>
