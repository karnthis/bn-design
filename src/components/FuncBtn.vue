<template>
  <v-btn @click="func">{{ label }}</v-btn>
</template>

<script>
export default {
  name: 'FuncBtn',
  props: [
    'label',
    'func'
  ],
  data: () => ({}),
};
</script>

<style scoped>
* {
  margin: 10px;
}
</style>