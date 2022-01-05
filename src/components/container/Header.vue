<template>
  <header class="my-header" :style="{ height }">
    <slot />
  </header>
</template>

<script>
export default {
  name: "MyHeader",
};
</script>
<script setup>
import { withDefaults } from "vue";

withDefaults(defineProps(), {
  height: "60px",
});
</script>

<style lang="scss">
@import "../styles/mixin";
@include b(header) {
  padding: $--header-padding;
  box-sizing: border-box;
  flex-shrink: 0;
}
</style>