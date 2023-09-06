<template>
  <div class="typing-container">
    <h1>打字通</h1>
    <div class="text-content">
      {{ textContent }}
    </div>
    <el-input
        type="textarea"
        :autosize="{ minRows: 5, maxRows: 12}"
        placeholder="请输入上方内容"
        v-model="content">
    </el-input>
    <div class="operate">
      <el-button :disabled="isDisabled" :style="{display: isDisplay}" @click="startGame">开始</el-button>
      <div class="timer">{{ timer }}</div>
    </div>
  </div>
</template>

<script>
const text = "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. This quote by Christian D. Larson reminds us that we all have the power within us to overcome any obstacle we may face. When we have confidence in ourselves and our abilities, we can achieve great things. So, let's trust ourselves, believe in our dreams, and work hard to make them a reality.";
let countDown; // 设置一个定时器
export default {
  name: "typing",
  data() {
    return {
      content: "",
      textContent: "你准备好了吗？",
      timer: "",
      isDisabled: false,
      isDisplay: "block"
    };
  },
  mounted() {
  },
  methods: {
    //  点击开始按钮
    startGame() {
      // 初始化
      this.timer = "60";
      this.content = "";
      this.isDisabled = true;
      this.isDisplay = "none";
      this.textContent = text;
      countDown = setInterval(() => {
        const remainingTime = parseInt(this.timer) - 1;
        if (remainingTime === 0) {
          this.endGame();
        }
        this.timer = remainingTime + "";
      }, 1000);x
    },
    endGame() {
      // 停止倒计时
      clearInterval(countDown);
      // 计算得分
      const score = this.calculateScore();
      this.textContent = `你的得分是${score}分`;
      // 显示开始按钮和计时器
      this.isDisplay = "block";
      this.timer = "60";
      this.isDisabled = false;
    },
    calculateScore() {
      const userText = this.content.trim().split(" ");
      const correctText = text.trim().split(" ");
      let score = 0;

      for (let i = 0; i < userText.length; i++) {
        // console.log(userText[i], correctText[i]);
        if (userText[i] === correctText[i]) {
          score++;
        }
      }
      return (score / correctText.length * 100).toFixed(2);
    }
  }
};
</script>

<style lang="scss">
.typing-container {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 30px 60px;
  border-radius: 10px;

  h1 {
    line-height: 50px;
  }

  .text-content {
    margin: 0 auto;
    text-align: center;
    padding: 20px;
  }

  .operate {
    width: 20%;
    margin: 0 auto;
    text-align: center;

    button {
      font-size: 24px;
      padding: 10px 20px;
      margin: 10px;
      border: none;
      cursor: pointer;
    }

    .timer {
      font-size: 48px;
      margin: 20px;
    }
  }
}
</style>
