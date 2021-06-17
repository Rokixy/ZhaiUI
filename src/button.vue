<template>
  <button class="zh-button" :class="{ [`icon-${iconPosition}`]: true }">
    <zh-icon class="icon" v-if="icon" :name="icon"></zh-icon>
    <zh-icon class="loading" v-if="icon" name="loading"></zh-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {},
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: "left",
    },
    validator(value) {
      return value === "left" || value === "right";
    },
  },
});
</script>

<style lang="scss" scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.zh-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .icon {
    order: 1;
    margin-right: 0.3em;
    margin-left: 0;
  }
  > .content {
    order: 2;
  }
  &.icon-right {
    > .icon {
      margin-left: 0.3em;
      margin-right: 0;
      order: 2;
    }
    > .content {
      order: 1;
    }
  }
  .loading {
    animation: spin 1s infinite linear;
  }
}
</style>