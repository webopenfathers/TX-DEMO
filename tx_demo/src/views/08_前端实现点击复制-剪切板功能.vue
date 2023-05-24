<template>
  <div class="copy">
    <!-- <input type="text" id="input" /> -->
    <div id="input" @click="copyText">888888</div>
    <button>点击复制</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    async copyText(e) {
      // console.log(e);
      const res = await navigator.clipboard.writeText(e.target.innerText);
      console.log(res);
    },
  },
};
</script>
