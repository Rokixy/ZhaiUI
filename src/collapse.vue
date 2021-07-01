<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import Vue from "vue";

export default defineComponent({
  setup() {},
  data() {
    return { eventBus: new Vue() };
  },
  props: {
    single: {
      type: Boolean,
      default: false,
    },
  },
  provide() {
    if (this.single) return { eventBus: this.eventBus };
  },
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
