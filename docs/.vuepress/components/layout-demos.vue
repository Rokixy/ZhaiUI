<template>
  <div class="wrapper">
    <zh-layout>
      <zh-header> header </zh-header>
      <zh-layout>
        <zh-sider> sider </zh-sider>
        <zh-content> content </zh-content>
      </zh-layout>
      <zh-footer> footer </zh-footer>
    </zh-layout>
    <br />
    <zh-layout>
      <zh-header> header </zh-header>
      <zh-content> content </zh-content>
      <zh-footer> footer </zh-footer>
    </zh-layout>
    <br />
    <zh-layout>
      <zh-header> header </zh-header>
      <zh-layout>
        <zh-sider> sider </zh-sider>
        <zh-layout>
          <zh-content> content </zh-content>
          <zh-footer> footer </zh-footer>
        </zh-layout>
      </zh-layout>
    </zh-layout>
  </div>
</template>

<script>
import Layout from "../../../src/Layout";
import Header from "../../../src/Header";
import Sider from "../../../src/Sider";
import Content from "../../../src/Content";
import Footer from "../../../src/Footer";
export default {
  components: {
    "zh-layout": Layout,
    "zh-header": Header,
    "zh-sider": Sider,
    "zh-content": Content,
    "zh-footer": Footer,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/helper";
.wrapper {
  > .layout {
    height: 30vh;
    > .header {
      height: 3em;
      background: $background;
    }
    > .content {
      background: lighten($background, 40%);
    }
    > .layout {
      height: 6em;
      > .sider {
        width: 3em;
        background: lighten($background, 15%);
      }
      > .content {
        background: lighten($background, 40%);
      }
      > .layout {
        > .content {
          background: lighten($background, 40%);
        }
        > .footer {
          background: $background;
        }
      }
    }
    > .footer {
      background: $background;
    }
  }
}
</style>