<template>
  <div class="tabs-content" :class="contentClasses" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {},
  inject: ["eventBus"],
  props: {
    name: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      active: false,
    };
  },
  mounted() {
    this.eventBus.$on("update:selected", (name) => {
      this.active = name === this.name;
    });
  },
  computed: {
    contentClasses() {
      return { active: this.active };
    },
  },
});
</script>

<style lang="scss" scoped>
.tabs-content {
  &.active {
    background: red;
  }
}
</style>
