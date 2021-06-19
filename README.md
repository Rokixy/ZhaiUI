# zhai-ui - 基于 Vue 2 的UI框架

[![Build Status](https://www.travis-ci.com/Rokixy/ZhaiUI.svg?branch=main)](https://www.travis-ci.com/Rokixy/ZhaiUI)

## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架，希望对你有用。

## 开始使用

1. 添加 CSS 样式

    使用本框架需要开启 border-box，IE 8 及以上浏览器支持此样式。

    ```
    *,*::before,*::after{box-sizing: border-box;}
    ```

    你还需要设置默认样式变量，IE 15 及以上浏览器支持此样式。
    ```
    html {
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #666;
    }
    ```

2. 安装 zhai-ui
    ```
    npm i --save zhai-ui
    ```

3. 引入 zhai-ui
    ```
    import {Button, ButtonGroup, Icon} from 'zhai-ui'
    import 'zhai-ui/dist/index.css'

    export default {
        name: 'app',
        components: {
            'zh-button': Button,
            'zh-icon': Icon
        }
    }
    ```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码