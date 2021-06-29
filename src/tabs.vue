<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {},
  props: {
    selected: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      default: "horizon",
      validator(value) {
        return ["horizon", "vertical"].indexOf(value) >= 0;
      },
    },
  },
});
</script>

<style lang="scss" scoped>
</style>
