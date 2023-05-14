<template>
  <div class="box">
    <div class="scrollTxtWarp">
      <div :class="topState ? 'scrollTxt top45' : 'scrollTxt'">
        <p v-for="(item, idx) in listNav2" :key="idx">{{ item }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'dpGD',
  data() {
    return {
      listNav2: [
        '姓名:张博闻1',
        '姓名:张博闻2',
        '姓名:张博闻3',
        '姓名:张博闻4',
        '姓名:张博闻5',
        '姓名:张博闻6',
        '姓名:张博闻7',
        '姓名:张博闻8',
        '姓名:张博闻9',
        '姓名:张博闻10',
        '姓名:张博闻11',
        '姓名:张博闻12',
        '姓名:张博闻13',
        '姓名:张博闻14',
        '姓名:张博闻15',
        '姓名:张博闻16',
        '姓名:张博闻17',
        '姓名:张博闻18',
        '姓名:张博闻19',
        '姓名:张博闻20',
        '姓名:张博闻21',
        '姓名:张博闻22',
        '姓名:张博闻23',
        '姓名:张博闻24',
      ],
      topState: false,
    };
  },
  created() {
    this.txtTop();
  },
  methods: {
    txtTop() {
      setInterval(() => {
        this.topState = true;
        setTimeout(() => {
          this.listNav2.push(this.listNav2.shift());
          this.topState = false;
        }, 500);
      }, 2000);
    },
  },
};
</script>
<style scoped>
.scrollTxtWarp {
  height: 500px;
  /* background-color: red; */
  overflow: hidden;
}

.scrollTxt p {
  /* background-color: blue; */
  line-height: 30px;
  font-size: 16px;
  text-align: center;
}

.scrollTxt p:first-of-type {
  margin-top: 0px;
}
.scrollTxt p:last-of-type {
  margin-bottom: 0px;
}

.top45 {
  transition: all 0.5s;
  /* 如果滚动出现卡顿---尝试改变 margin-top */
  margin-top: -45px;
}
</style>
