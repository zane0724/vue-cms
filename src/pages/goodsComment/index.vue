<template>
  <commentComponent :id="$route.params.id"></commentComponent>
</template>

<script>
import commentComponent from "@/components/comment";
export default {
  components: {
      commentComponent
  }
};
</script>
<style lang="less">
</style>
