<template>
  <div class="tabs-item" :class="itemClasses" @click="aaa">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {},
  data() {
    return {
      active: false,
    };
  },
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
  mounted() {
    this.eventBus.$on("update:selected", (name) => {
      this.active = name === this.name;
    });
  },
  computed: {
    itemClasses() {
      return { active: this.active };
    },
  },
  methods: {
    aaa() {
      this.eventBus.$emit("update:selected", this.name);
    },
  },
});
</script>

<style lang="scss" scoped>
.tabs-item {
  flex-shrink: 0;
  padding: 0 1em;
  &.active {
    background: red;
  }
}
</style>
