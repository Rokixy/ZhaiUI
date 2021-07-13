<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {},
  name: "zh-tabs-body",
  inject: ["eventBus"],
});
</script>

<style lang="scss" scoped>
</style>
