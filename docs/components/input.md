---
title: 'Input - 输入框'
---
# 输入框
## 预览
&nbsp;
<ClientOnly>
  <input-demos></input-demos>
</ClientOnly>

## 使用方法
```vue
<template>
    <zh-input></zh-input>
    <zh-input disabled value="禁用"></zh-input>
    <zh-input readonly value="只读"></zh-input>
    <zh-input error="错误信息"></zh-input>
    <zh-input :success="true"></zh-input>
    <zh-input tips="提示信息"></zh-input>
    <br />
    <zh-input v-model="xxx"></zh-input>
    <br />
    <span>value:&nbsp;{{xxx}}</span>
</template>
```

## 选项
> Input 组件的选项有： disabled, readonly, error, success, tips。 并且支持数据的双向绑定。  
#### 1. disabled
表示是否禁用状态，默认为 false，禁用。
#### 2. readonly
表示只读状态， 与 disabled 相似。但是 disabled 不可以被 Tab 键选中，<span style='color:#3eaf7c;background-color:#F8F8F8'>readonly</span> 可以被选中，不能修改。
#### 3. error / success / tips
给 Input 添加 <span style='color:#3eaf7c;background-color:#F8F8F8'>error / success / tips</span> 属性，会在该 input 右侧显示用于提示用户的图标或文字。
#### 4. v-model  
预览  
<ClientOnly>
  <input-v-model-demos></input-v-model-demos>  
</ClientOnly>
代码
```vue
<template>
  <div>
    <zh-input v-model="value"></zh-input> <br>
    value:{{value}}
  </div>
</template>
<script>
  export default {
    data(){
      return{ value:'双向绑定' }
    }
  }
</script>
```
