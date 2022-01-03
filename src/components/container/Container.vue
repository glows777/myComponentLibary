<template>
  <section class="my-container" :class="{ 'is-vertical': isVertical }">
    <slot />
  </section>
</template>

<script>
// ? 关于有两个script：因为开发组件库的时候，我们要确保每个组件都有自己的名字，script setup 中没法返回组件的名字，所以我们需要一个单独的标签，使用 options 的语法设置组件的 name 属性。
export default {
  name: "MyContainer",
};
</script>
<script setup>
import { computed, useSlots } from "vue";

const props = defineProps({});

const slots = useSlots();

const isVertical = computed(() => {
  if (slots && slots.default) {
    // ! vn是指虚拟结点VirtualDOmNode -> 必须是这个类型
    // * some函数的作用：检测数组中是否满足指定条件
    return slots.default().some((vn) => {
      // ! vn.type的类型必须是组件
      const tag = vn.type.name;
      return tag === "MyHeader" || tag === "MyFooter";
    });
  } else {
    if (props.direction === "vertical") {
      return true;
    } else {
      return false;
    }
  }
});
</script>
<style lang="scss">
@import "../styles/mixin";
@include b(container) {
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;
  @include when(vertical) {
    flex-direction: column;
  }
}
</style>