<template>
  <div class="tabs-item" @click="aaa">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {},
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: [String, Number],
      required: true,
    },
  },
  inject: ["eventBus"],
  created() {
    this.eventBus.$on("update:selected", (name) => {
      console.log(name);
    });
  },
  methods: {
    aaa() {
      this.eventBus.$emit("update:selected", this.name);
    },
  },
});
</script>

<style lang="scss" scoped>
</style>
