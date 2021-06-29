<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent, provide } from "@vue/composition-api";
import Vue from "vue";

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
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },
  created() {
    //this.$emit('update:selected', 'xxx')
  },
});
</script>

<style lang="scss" scoped>
</style>
