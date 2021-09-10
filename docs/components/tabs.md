---
title: 'Tabs - 标签'
---
# 标签
## 预览
&nbsp;
<ClientOnly>
    <tabs-demos></tabs-demos>
</ClientOnly>

## 使用方法
此组件中 zh-tabs zh-tabs-item zh-tabs-content 必须有一一对应的 name。
```vue
<template>
  <div class="tabs-wrapper">
    <zh-tabs :selected.sync="selectedTab">
      <zh-tabs-head>
        <zh-tabs-item name='tab1'>
          <zh-icon name="setting"></zh-icon>
          Tab1 
        </zh-tabs-item>
        <zh-tabs-item name='tab2'>Tab2</zh-tabs-item>
        <zh-tabs-item name='tab3'>Tab3</zh-tabs-item>
        <zh-tabs-item name='tab4' disabled>Tab4</zh-tabs-item>
      </zh-tabs-head>
      <zh-tabs-body>
        <zh-tabs-pane name='tab1'>内容1</zh-tabs-pane>
        <zh-tabs-pane name='tab2'>内容2</zh-tabs-pane>
        <zh-tabs-pane name='tab3'>内容3</zh-tabs-pane>
        <zh-tabs-pane name='tab4'>内容4</zh-tabs-pane>
      </zh-tabs-body>
    </zh-tabs>
  </div>
</template>
<script>
  export default {
    data() { return { selectedTab: 'tab1' } }
  }
</script>
```

## 选项
1. 默认高亮状态
zh-tabs 需要设置<span style='color:#3eaf7c;background-color:#F8F8F8'> selected </span>属性来确定默认标签。  
你可以这样：`:selected.sync="selectedTab"`,其中 <span style='color:#3eaf7c;background-color:#F8F8F8'>selectedTab </span>是你需要传递的默认值。  
并且该标签的子组件应该是 zh-tabs-head 和 zh-tabs-body ，否则你会得到一个警告。
2. disabled 状态
 <span style='color:#3eaf7c;background-color:#F8F8F8'>disabled</span> 属性用于 zh-tabs-item 标签，可以设置该标签的不可用状态。
