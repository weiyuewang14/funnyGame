<template>
  <div class="container">
    <div class="header">
      <h1>欢迎来到小游戏世界</h1>
    </div>
    <div class="page-body">
      <div class="management">
        <h1>游戏中心</h1>
        <Search />
        <div class="all-game">
          <el-button class="game-btn" @click="openGame">猜数字</el-button>
          <el-button class="game-btn" @click="">打字机</el-button>
          <el-button class="game-btn" @click="">打字机</el-button>
        </div>
      </div>
      <div id="play-area" class="play-area">
          游戏区域
        <router-view></router-view>
      </div>
    </div>
    <div class="footer">底部区域</div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
  },
  methods:{
    openGame(){
      this.$router.push('/typing')
    }
  }
};
</script>
<style lang="scss">
.container {
  box-sizing: border-box;
  padding: 20px 0;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: #bfa;

  .page-body {
    display: flex;
    justify-content: space-around;
    height: 95%;

    .management {
      width: 20%;
      background-color: #ffcccc;
      align-items: center;
      .all-game{
        display: flex;
        flex-wrap: wrap;

        .game-btn{
          width: 30%;
        }
      }
    }

    .play-area {
      width: 77%;
      background-color: #ac8c3e;
    }
  }
}


</style>
