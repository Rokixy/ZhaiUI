<template>
  <div class="tabs-content">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {},
  inject: ["eventBus"],
});
</script>

<style lang="scss" scoped>
</style>
