<template>
  <div class="container">
    <h1>猜数字游戏</h1>
    <div class="input-group">
      <label for="guess">请猜一个0~100的整数</label>
      <input id="guess" type="text" v-model="number">
      <button id="submit" @click="submit">提交</button>
    </div>
    <div class="result">{{result}}</div>
    <div class="message">{{message}}</div>
    <button id="play-again" class="play-again" style="display: none" @click="playAgain">再玩一次</button>
  </div>
</template>

<script>
export default {
  name: "guessNumber",
  data() {
    return {
      answer:"",
      number: "",
      result:"",
      message:""
    };
  },
  mounted() {
    this.answer = Math.floor(Math.random() * 100) + 1;
  },
  methods() {
    // 处理提交事件
    function submit() {
      // 获取输入的内容
      let guess = this.number;
      let guess_num = parseInt(guess);
      // 验证输入的内容
      if (isNaN(guess) || guess_num < 1 || guess_num > 100) {
        this.result = "";
        this.message = "请输入1~100以内的整数！";
        return;
      }

      // 比较用户输入的数字和答案
      if (guess_num === this.answer) {
        this.result = "恭喜你，答对了！";
        this.message = "";
        play_again_btn.style.display = "block";
        submit_btn.disabled = true;
      } else if (guess_num < answer) {
        message.textContent = "太小了，请继续！";
        result.textContent = "";
      } else {
        this.message = "太大了，请继续！";
        this.result = "";
      }
    }
    // 处理再玩一次事件
    function playAgain() {
      // 重新生成随机数
      this.answer = Math.floor(Math.random() * 100) + 1;

      // 清空输入框和提示信息
      this.number = "";
      message.textContent = "";
      result.textContent = "";

      // 隐藏再玩一次按钮，启动提交按钮
      play_again_btn.style.display = "none";
      submit_btn.disabled = false;
    }
  }

};
</script>

<style lang="scss">
.container {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: #d1d1d1;
  padding: 30px;
  border-radius: 10px;

  h1 {
    font-size: 32px;
  }

  .input-group {
    margin-bottom: 20px;

    label {
      display: block;
      margin-bottom: 5px;
    }

    input[type='text'] {
      font-size: 18px;
      padding: 5px 10px;
    }
  }


  button {
    font-size: 18px;
    padding: 5px 10px;
    background-color: #007bff;
    color: #ffffff;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: #0062cc;
  }

  .result {
    font-size: 24px;
    margin-bottom: 20px;
  }

  .message {
    font-size: 18px;
    margin-bottom: 20px;
  }

  .play-again {
    font-size: 18px;
    padding: 5px 10px;
    background-color: #007bff;
    color: #ffffff;
    border: none;
    cursor: pointer;
    margin: 0 auto;
  }

  .play-again:hover {
    background-color: #0062cc;
  }
}


</style>
