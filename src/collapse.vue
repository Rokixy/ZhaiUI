<template>
  <div class="collapse">
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
.collapse {
  $grey: #ddd;
  $border-radius: 4px;
  border: 1px solid $grey;
  border-radius: $border-radius;
}
</style>
