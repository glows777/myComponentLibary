<template>
  <main class="my-main">
    <slot />
  </main>
</template>

<script>
export default {
  name: "MyMain",
};
</script>

<script setup>
</script>
<style lang="scss">
@import "../styles/mixin";
@include b(main) {
  display: block;
  flex: 1;
  flex-basis: auto;
  overflow: auto;
  box-sizing: border-box;
  padding: $--main-padding;
}
</style>