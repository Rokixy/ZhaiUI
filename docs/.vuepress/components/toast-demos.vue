<template>
  <div>
    <zh-button @click="noAutoClose">不会自动关闭</zh-button>&nbsp;&nbsp;
    <zh-button @click="enableHTML">支持 HTML 语法</zh-button>&nbsp;&nbsp;
    <zh-button @click="withCallback">关闭按钮添加回调函数</zh-button
    >&nbsp;&nbsp;
    <br />
    <zh-button @click="top">上方弹出</zh-button>
    <zh-button @click="middle">中间弹出</zh-button>
    <zh-button @click="bottom">下方弹出</zh-button>
  </div>
</template>

<script>
import Vue from "vue";
import Toast from "../../../src/Toast";
import Button from "../../../src/Button";
import plugin from "../../../src/plugin";
Vue.use(plugin);
export default {
  components: { "zh-toast": Toast, "zh-button": Button },
  methods: {
    noAutoClose() {
      this.$toast("我是 toast 内容", {
        autoClose: false,
        closeButton: {
          text: "确定",
        },
      });
    },
    enableHTML() {
      this.$toast("我是<strong>加粗内容</strong>", {
        closeButton: {
          text: "确定",
          callback: () => {
            console.log("回调的输出");
          },
        },
        enableHtml: true,
      });
    },
    withCallback() {
      this.$toast("关闭后弹出alert", {
        closeButton: {
          text: "确定",
          callback: () => {
            window.alert("回调函数执行了");
          },
        },
      });
    },
    top() {
      this.$toast("我是 toast 内容", { position: "top" });
    },
    middle() {
      this.$toast("我是 toast 内容", { position: "middle" });
    },
    bottom() {
      this.$toast("我是 toast 内容", { position: "bottom" });
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  margin-top: 10px;
}
</style>