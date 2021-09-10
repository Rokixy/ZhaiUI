---
title: 'Toast - 弹出提示'
---
# 弹出提示
## 预览
&nbsp;
<ClientOnly>
  <toast-demos></toast-demos>
</ClientOnly>

## 使用方法
想要使用 Toast 组件，首先需要引入该组件,然后使用 Vue 官方文档中插件的使用方法使用该插件。  
代码  
```vue
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
```

## 选项
1. zIndex  
此选项用于设定 Toast 组件在当前堆叠上下文中的堆叠层级。默认为20。(这是因为在使用 vuepress 编写文档时发现值为 20 才有效。)  
若你的项目不可见 Toast 组件，尝试传入一个 <span style='color:#3eaf7c;background-color:#F8F8F8'>zIndex </span> 试试。
2. autoClose
此选项可以设定 Toast 自动关闭的延时时间。单位为“ 秒 ”，默认值为 3，设置为`false`时不会自动关闭。  
代码  
    ```vue
    <template>
      <div>
        <zh-button @click="noAutoClose">不会自动关闭</zh-button>
      </div>
    </template>
    <script>
      import Vue from 'vue'
      import Toast from '../../../src/Toast'
      import Button from '../../../src/Button'
      import plugin from '../../../src/plugin'
      Vue.use(plugin)
      export default {
        components: { 'zh-toast': Toast, 'zh-button': Button },
        methods: {
            noAutoClose() {
                this.$toast("我是 toast 内容", {
                    autoClose: false,
                    closeButton: {
                    text: "确定",
                    },
                });
            },
        }
      }
    </script>
    ```
3. closeButton  
Toast 组件的右侧按钮文本可编辑，并且支持传入一个回调。 closeButton 选项接收一个对象。对象包括 text 与 callback 。默认值为`{ text: "关闭", callback: undefined }`  
代码  
    ```vue
    <template>
      <div>
        <zh-button @click="auto">点我</zh-button>
      </div>
    </template>
    <script>
      import Vue from 'vue'
      import Toast from '../../../src/Toast'
      import Button from '../../../src/Button'
      import plugin from '../../../src/plugin'

      Vue.use(plugin)
      export default {
        components: {'zh-toast': Toast, 'zh-button': Button},
        methods: {
          auto() {
            this.$toast('我是 toast 内容', {
                autoClose: 5, 
                closeButton: { text:'确定', callback:()=>{ window.alert("回调函数执行了") }}
            })
          }
        }
      }
    </script>
    ```

4. enableHtml  
Toast 组件还支持 HTML 语法，该功能默认关闭，你需要传递一个 enableHTML 参数来开启它, `enableHtml:true` 。 开启后就可以在 Toast 内容区域写 HTML 语法。
代码
    ```vue
    enableHTML() {
        this.$toast("我是<strong>加粗内容</strong>", {
            closeButton: { text: "确定", callback: () => { console.log("回调的输出"); }},
            enableHtml: true,
        });
    },
    ```

5. position  
可以设定 Toast 弹出的位置 ，支持 top, middle, bottom 三个值。
    ```vue
    this.$toast('我是 toast 内容', { position: 'top' })
    ```
