# 宅UI - 基于 Vue 2 的UI组件库

[![Build Status](https://www.travis-ci.com/Rokixy/ZhaiUI.svg?branch=main)](https://www.travis-ci.com/github/Rokixy/ZhaiUI)

## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架，希望对你有用。

## 开始使用

1. 添加 CSS 样式

    使用本框架需要开启 border-box，IE 8 及以上浏览器支持此样式。

    ```
    *,*::before,*::after{box-sizing: border-box;}
    ```

2. 安装 zhai-ui
    ```
    npm i --save zhai-ui
    ```

3. 引入 zhai-ui
    ```js
    import {
        Button, ButtonGroup, Input, Row, Col, Layout, 
        Header, Content, Sider, Footer, Toast, Icon, Tabs,
        TabsHead, TabsBody, TabsItem, TabsContent, Popover,
        Collapse, CollapseItem, plugin
    } from 'zhai-ui'
    import 'zhai-ui/dist/index.css'

    export default {
        name: 'app',
        components: {
            'zh-button':Button,
            'zh-button-group':ButtonGroup,
            'zh-input': Input,
            'zh-row': Row,
            'zh-col':Col,
            'zh-layout': Layout,
            'zh-header': Header,
            'zh-content': Content,
            'zh-sider': Sider,
            'zh-footer': Footer,
            'zh-toast': Toast,
            'zh-icon':Icon,
            'zh-tabs': Tabs,
            'zh-tabs-head': TabsHead,
            'zh-tabs-body': TabsBody,
            'zh-tabs-item': TabsItem,
            'zh-tabs-content': TabsContent,
            'zh-popover': Popover,
            'zh-collapse':Collapse,
            'zh-collapse-item':CollapseItem,
        }
    }
    ```

## 文档
[宅 UI 官网](https://rokixy.github.io/ZhaiUI/)
## 提问
[Issues](https://github.com/Rokixy/ZhaiUI/issues)