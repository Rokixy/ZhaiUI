<template>
  <div class="popover" @click="aaa">
    <div class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {},
  data() {
    return { visible: false };
  },
  methods: {
    aaa() {
      this.visible = !this.visible;
    },
  },
});
</script>

<style lang="scss" scoped>
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
  .content-wrapper {
    position: absolute;
    bottom: 100%;
    left: 0;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  }
}
</style>