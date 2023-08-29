<template>
  <div class="container">
    <div class="header">
      <h1>欢迎来到游戏中心</h1>
    </div>
    <div class="page-body">
      <div class="management">
        <button type="button" id="btn">确认</button>
      </div>
      <div id="play-area" class="play-area">游戏区域</div>
    </div>
    <div class="footer">底部区域</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {}
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
  overflow: hidden;
}

.container {
  padding: 20px 0;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: #bfa;
}

.page-body {
  display: flex;
  justify-content: space-around;
  height: 83%;
}

.management {
  width: 25%;
  background-color: #ffcccc;
}

.play-area {
  width: 65%;
  background-color: #ac8c3e;
}
</style>
