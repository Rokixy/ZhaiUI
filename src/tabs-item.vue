<template>
  <div
    class="tabs-item"
    :class="itemClasses"
    @click="onClick"
    :data-name="name"
  >
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {},
  name: "zh-tabs-item",
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
    if (this.eventBus) {
      this.eventBus.$on("update:selected", (name) => {
        this.active = name === this.name;
      });
    }
  },
  computed: {
    itemClasses() {
      return {
        active: this.active,
        disabled: this.disabled,
      };
    },
  },
  methods: {
    onClick() {
      if (this.disabled) {
        return;
      }
      if (this.eventBus) {
        this.eventBus.$emit("update:selected", this.name, this);
      }
      this.$emit("click", this);
    },
  },
});
</script>

<style lang="scss" scoped>
$active: #3eaf7c;
$disabled-text-color: grey;
.tabs-item {
  flex-shrink: 0;
  padding: 0 1em;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  &.active {
    color: $active;
  }
  &.disabled {
    color: $disabled-text-color;
    cursor: not-allowed;
  }
}
</style>
