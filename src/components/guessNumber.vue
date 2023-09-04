<template>
  <div class="guess-number-container">
    <h1>猜数字游戏</h1>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="请输入一个0-100的数字">
        <el-input v-model="answer" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :disabled="isDisabled" @click="submit()">提交</el-button>
      </el-form-item>
    </el-form>
    <div class="result">{{ result }}</div>
    <div class="message">{{ message }}</div>
    <el-button class="play-again" :style="{display: isDisplay}" @click="playAgain">再玩一次</el-button>
  </div>
</template>

<script>
export default {
  name: "guessNumber",
  data() {
    return {
      answer: "",
      number: "",
      result: "",
      message: "",
      isDisplay: "none",
      isDisabled: false,
    };
  },
  mounted() {
    this.number = Math.floor(Math.random() * 100) + 1;
  },
  methods: {
    // 处理提交事件
    submit() {
      // 获取输入的内容
      let guess = this.answer;
      let guess_num = parseInt(guess);
      // 验证输入的内容
      if (isNaN(guess) || guess_num < 1 || guess_num > 100) {
        this.result = "";
        this.message = "请输入1~100以内的整数！";
        return;
      }

      // 比较用户输入的数字和答案
      if (guess_num === this.number) {
        this.result = "恭喜你，答对了！";
        this.message = "";
        this.isDisplay = "block";
        this.isDisabled = true;
      } else if (guess_num < this.number) {
        this.message = "太小了，请继续！";
        this.result = "";
      } else {
        this.message = "太大了，请继续！";
        this.result = "";
      }
    },

    // 处理再玩一次事件
    playAgain() {
      // 重新生成随机数
      this.number = Math.floor(Math.random() * 100) + 1;

      // 清空输入框和提示信息
      this.answer = "";
      this.message = "";
      this.result = "";

      // 隐藏再玩一次按钮，启动提交按钮
      this.isDisplay = "none";
      this.isDisabled = false;
    }
  }

};
</script>

<style lang="scss" scoped>
.guess-number-container {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 30px;
  border-radius: 10px;

  h1 {
    line-height: 100px;
  }

  .result {
    font-size: 32px;
  }

  .message {
    font-size: 22px;
    margin-bottom: 30px;
  }
  .play-again{
    margin: auto;
  }
}


</style>
