<template>
  <div class="tabs-wrapper">
    <zh-tabs :selected="selectedTab">
      <zh-tabs-head>
        <zh-tabs-item name="tab1">
          <zh-icon name="setting"></zh-icon>
          Tab1
        </zh-tabs-item>
        <zh-tabs-item name="tab2">Tab2</zh-tabs-item>
        <zh-tabs-item name="tab3">Tab3</zh-tabs-item>
        <zh-tabs-item name="tab4" disabled>Tab4</zh-tabs-item>
      </zh-tabs-head>
      <zh-tabs-body>
        <zh-tabs-content name="tab1">内容1</zh-tabs-content>
        <zh-tabs-content name="tab2">内容2</zh-tabs-content>
        <zh-tabs-content name="tab3">内容3</zh-tabs-content>
        <zh-tabs-content name="tab4">内容4</zh-tabs-content>
      </zh-tabs-body>
    </zh-tabs>
  </div>
</template>
<script>
import { defineComponent } from "@vue/composition-api";
import Tabs from "../../../src/tabs";
import TabsBody from "../../../src/tabs-body";
import TabsHead from "../../../src/tabs-head";
import TabsItem from "../../../src/tabs-item";
import TabsContent from "../../../src/tabs-content";
import Icon from "../../../src/Icon";

export default defineComponent({
  components: {
    "zh-tabs": Tabs,
    "zh-tabs-head": TabsHead,
    "zh-tabs-body": TabsBody,
    "zh-tabs-item": TabsItem,
    "zh-tabs-content": TabsContent,
    "zh-icon": Icon,
  },
  data() {
    return { selectedTab: "tab1" };
  },
});
</script>