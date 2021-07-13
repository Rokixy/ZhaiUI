<template>
  <div>
    <zh-button-group>
      <zh-button icon="left">上一页</zh-button>
      <zh-button>目录</zh-button>
      <zh-button icon="right" iconPosition="right">下一页</zh-button>
    </zh-button-group>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import Button from "../../../src/button.vue";
import ButtonGroup from "../../../src/button-group.vue";

export default defineComponent({
  setup() {},
  components: {
    "zh-button": Button,
    "zh-button-group": ButtonGroup,
  },
});
</script>

<style lang="scss" scoped>
</style>