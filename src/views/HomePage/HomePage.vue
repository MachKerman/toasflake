<template>
  <div class="home">
    <div class="container__globalEventList">
      <el-button type="primary" @click="addNewGlobalEvent">
        生成新的D100
      </el-button>
      <div class="globalEventList__box" ref="globalEventList">
        <el-card
          class="globalEventList__item"
          v-for="item in rand100List"
          :key="item.id"
        >
          <span class="globalEventList__id">{{ item.id }}</span>
          <span class="globalEventList__number">{{ item.value }}</span>
          <el-input
            class="globalEventList__text"
            size="mini"
            placeholder="无描述"
            v-model="item.note"
          >
          </el-input>
          {{ $moment(item.time).format("hh:mm:ss") }}
        </el-card>
        <div class="globalEventList__last"></div>
      </div>
      <div class="pagedata">{{ pageData }}</div>
    </div>
    <div class="head"></div>
    <div class="home__session">Session ID:{{ session }}</div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  directives: {},
  mixins: [],
  data() {
    return {
      session: "",
      rand100List: [],
      pageData: {
        sessionid: "",
        globalEventList: [],
      },
    };
  },
  computed: {},
  methods: {
    rand100() {
      return Math.ceil(Math.random() * 100);
    },
    addNewGlobalEvent() {
      let rand100 = {
        id: this.rand100List[this.rand100List.length - 1].id + 1,
        time: this.timeNow(),
        note: "",
        value: this.rand100(),
      };
      this.rand100List.push(rand100);
      this.pageData.globalEventList.push(rand100);
      if (this.rand100List.length > 30) {
        this.rand100List.shift();
      }
      this.$refs.globalEventList.scrollBy(0, 20000);
    },
    timeNow() {
      let now = this.$moment();
      return now;
    },
  },
  watch: {},
  created() {
    this.session = this.$md5(
      Math.random() + "adsavb" + Math.random() + "jktuktu" + Math.random()
    );
    this.pageData.sessionid = this.session;
    this.rand100List.push({
      id: 0,
      value: this.rand100(),
      note: "",
      time: this.timeNow(),
    });
    this.pageData.globalEventList[0] = this.rand100List[0];
  },
};
</script>

<style lang='scss' scoped>
.home {
  background-color: #fffefd;
  .home__session {
    position: fixed;
    top: 0;
    left: 0;
    color: rgba(0, 0, 0, 0.1);
  }
  .head {
    display: inline-block;
    height: 5rem;
  }
  .container__globalEventList {
    position: absolute;
    box-sizing: border-box;
    height: 100vh;
    width: 26rem;
    padding: 1rem;
    border-right: 1px solid #dcdfe6;
    border-radius: 0.3rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 12px 0px;
    .globalEventList__box {
      margin-top: 1rem;
      height: 75vh;
      overflow-y: scroll;
      border: 1px solid #dcdfe6;
    }
    .globalEventList__last {
      display: block;
      margin-bottom: 4rem;
    }
    .globalEventList__item {
      overflow: hidden;
    }
    .globalEventList__id {
      position: relative;
      left: -0.5rem;
      display: inline-block;
      width: 1.5rem;
      padding-right: 0.2rem;
      text-align: right;
      overflow: visible;
      border-right: 2px solid #ccc;
    }
    .globalEventList__number {
      position: relative;
      left: -0.5rem;
      display: inline-block;
      width: 1.5rem;
    }
    .globalEventList__text {
      width: 12rem;
    }
  }
  .pagedata {
    margin-top: 1rem;
    height: 15vh;
    overflow-y: scroll;
    border: 1px solid #dcdfe6;
    color: #999;
  }
}
</style>