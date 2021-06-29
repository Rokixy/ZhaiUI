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
  mounted() {
    if (this.$children.lenght === 0) {
      console &&
        console.warn &&
        console.warn(
          "tabs的子组件应该是tabs-head和tabs-body，可能你忘了写子组件"
        );
    }
    this.$children.forEach((vm) => {
      if (vm.$options.name === "zh-tabs-head") {
        vm.$children.forEach((item) => {
          if (
            item.$options.name === "zh-tabs-item" &&
            item.name === this.selected
          ) {
            this.eventBus.$emit("update:selected", this.selected, item);
          }
        });
      }
    });
  },
});
</script>

<style lang="scss" scoped>
</style>
