<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

let validator = (value) => {
  let keys = Object.keys(value);
  let valid = true;
  keys.forEach((key) => {
    if (["span", "offset"].indexOf(key) < 0) {
      valid = false;
    }
  });
  return valid;
};
export default defineComponent({
  setup() {},
  props: {
    span: [Number, String],
    offset: [Number, String],
    phone: { type: Object, validator },
    ipad: { type: Object, validator },
    narrowPc: { type: Object, validator },
    widePc: { type: Object, validator },
  },
  data() {
    return {
      gutter: 0,
    };
  },
  methods: {
    createClasses(obj, str = "") {
      if (!obj) {
        return [];
      }
      let array = [];
      if (obj.span) {
        array.push(`${str}span-${obj.span}`);
      }
      if (obj.offset) {
        array.push(`${str}offset-${obj.offset}`);
      }
      return array;
    },
  },
  computed: {
    colClass() {
      let { span, offset, phone, ipad, narrowPc, widePc } = this;
      let createClasses = this.createClasses;
      return [
        ...createClasses({ span, offset }),
        ...createClasses(phone, "phone-"),
        ...createClasses(ipad, "ipad-"),
        ...createClasses(narrowPc, "narrowPc-"),
        ...createClasses(widePc, "widePc-"),
      ];
    },
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: this.gutter / 2 + "px",
      };
    },
  },
});
</script>


<style lang="scss" scoped>
.col {
  @media (max-width: 576px) {
    $class-prefix: phone-span-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    $class-prefix: phone-offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }
  @media (min-width: 577px) {
    $class-prefix: ipad-span-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    $class-prefix: ipad-offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }
  @media (min-width: 769px) {
    $class-prefix: narrow-pc-span-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    $class-prefix: narrow-pc-offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }
  $class-prefix: span-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }
  @media (min-width: 1201px) {
    $class-prefix: wide-pc-span-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    $class-prefix: wide-pc-offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }
}
</style>