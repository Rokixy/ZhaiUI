<template>
  <div>
    <zh-button>默认按钮</zh-button>
    <zh-button icon="setting">默认按钮</zh-button>
    <zh-button :loading="true">默认按钮</zh-button>
    <zh-button disabled>默认按钮</zh-button>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import Button from "../../../src/button.vue";

export default defineComponent({
  setup() {},
  components: {
    "zh-button": Button,
  },
});
</script>

<style lang="scss" scoped>
</style>