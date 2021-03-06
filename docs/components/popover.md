---
title: 'Popover - 弹出层'
---
# 弹出层
## 预览
&nbsp;
<ClientOnly>
    <popover-demos></popover-demos>
</ClientOnly>

## 使用方法
```vue
<template>
  <div class="popover-wrapper">
    <zh-popover position="left">
      <template slot="content"> popover 中的内容 </template>
      <zh-button>左方显示内容</zh-button>
    </zh-popover>
    <zh-popover position="top">
      <template slot="content"> popover 中的内容 </template>
      <zh-button>上方显示内容</zh-button>
    </zh-popover>
    <zh-popover position="bottom">
      <template slot="content"> popover 中的内容 </template>
      <zh-button>下方显示内容</zh-button>
    </zh-popover>
    <zh-popover position="right">
      <template slot="content"> popover 中的内容 </template>
      <zh-button>右方显示内容</zh-button>
    </zh-popover>
    <zh-popover trigger="hover">
      <template slot="content"> popover 中的内容 </template>
      <zh-button>悬停鼠标 显示内容</zh-button>
    </zh-popover>
  </div>
</template>

<script>
import Popover from "../../../src/Popover";
import Button from "../../../src/Button";
export default {
  components: {
    "zh-popover": Popover,
    "zh-button": Button,
  },
};
</script>
```

## 选项
Popover 组件有两个选项： position 用于设置显示位置； trigger 用于设置触发事件
#### 1. position
<span style='color:#3eaf7c;background-color:#F8F8F8'> position </span> 的可选参数为 
<span style='color:#3eaf7c;background-color:#F8F8F8'> left </span>/<span style='color:#3eaf7c;background-color:#F8F8F8'> top </span>/<span style='color:#3eaf7c;background-color:#F8F8F8'> bottom </span>/<span style='color:#3eaf7c;background-color:#F8F8F8'> right </span>，默认值为 <span style='color:#3eaf7c;background-color:#F8F8F8'> top </span>。
#### 2. trigger

<span style='color:#3eaf7c;background-color:#F8F8F8'> trigger </span> 的可选参数为<span style='color:#3eaf7c;background-color:#F8F8F8'> click </span>和<span style='color:#3eaf7c;background-color:#F8F8F8'> hover </span>，默认值为<span style='color:#3eaf7c;background-color:#F8F8F8'> click </span>。
