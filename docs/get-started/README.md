---
title: '快速上手'
---
# 快速上手

## 引入必要资源
```javascript
import {Button} from "zhai-ui";
import "zhai-ui/dist/index.css";
```

## 注册组件
```javascript
export default {
  name: "ComponentName",
  components: {
    "zh-button": Button,
  },
}
```

## 使用
代码：
```vue
<template>
  <div>
    <zh-button>默认按钮</zh-button>
  </div>
</template>
```
效果：
<ClientOnly>
  <get-started-demos></get-started-demos>
</ClientOnly>
