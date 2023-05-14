<template>
  <div class="cardList-wrapper">
    <count-to
      :startVal="0"
      :endVal="12367"
      :duration="500"
      style="font-size: 60px"
    />
  </div>
</template>
<script>
import countTo from 'vue-count-to';
export default {
  components: {
    countTo,
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>
<style></style>
