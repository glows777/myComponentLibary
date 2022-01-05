<template>
  <footer class="my-footer" :style="{ height }">
    <slot />
  </footer>
</template>
<script>
export default {
  name: "MyFooter",
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

@include b(input) {
  padding: $--footer-padding;
  box-sizing: border-box;
  flex-shrink: 0;
  @include m(inner) {
    width: 300px;
  }
}
</style>