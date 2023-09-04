<template>
  <div class="container">
    <div class="header">欢迎来到小游戏世界</div>
    <div class="page-body">
      <div class="management">
        <div class="game" v-for="item in gameListInfo" id="item.id">
          <div class="game-item" @click="openGame(item)">
            <img :src="require('../assets/' + item.imgPath)" :alt="item.cnName"/>
          </div>
        </div>
      </div>
      <div id="play-area" class="play-area">
        <router-view></router-view>
      </div>
    </div>
    <div class="footer">Copyright © 2023 | 王维跃</div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      gameListInfo: [
        {
          id: "1",
          name: "guessNumber",
          cnName: "猜数字",
          path: "/guess-number",
          imgPath: "images/guessNumber_img.jpg"
        },
        {
          id: "2",
          name: "typing",
          cnName: "打字机",
          path: "/typing",
          imgPath: "images/typing_img.jpg"
        },
        {
          id: "3",
          path: "/mine-sweeper",
          cnName: "扫雷",
          name: "minesweeper",
          imgPath: "images/mineSweeper_img.jpg"
        }
      ]
    };
  },
  components: {},
  methods: {
    openGame(item) {
      this.$router.push(item.path);
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  box-sizing: border-box;
  //padding: 20px 0;
  width: 100%;
  height: 100%;
  text-align: center;
  background-image: url("../assets/images/bgc_img.jpg");
  background-size: cover;

  .header {
    height: 60px;
    line-height: 60px;
    font-size: 30px;
    color: #5aa774;
  }

  .page-body {
    display: flex;
    justify-content: space-around;
    height: 86%;

    .management {
      width: 22%;
      //background-color: #ffcccc;
      //align-items: center;
      display: flex;
      flex-wrap: wrap;
      border-bottom: 2px solid #717065;
      .game {
        width: 30%;
        margin-left: 8px;
        .game-item {
          max-width: 100px;
          width: 100%;
          img{
            border-radius: 5px;
            width: 100%;
          }
        }
      }
    }

    .play-area {
      width: 72%;
      background-color: #cbbd9b;
      border-radius: 10px;
    }
  }

  .footer {
    padding: 8px;
    color: #999aaa;
  }
}


</style>
