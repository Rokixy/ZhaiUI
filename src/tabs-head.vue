<template>
  <div class="tabs-head">
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {},
  inject: ["eventBus"],
  created() {},
});
</script>

<style lang="scss" scoped>
</style>
