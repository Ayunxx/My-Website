<script setup lang="ts">
import {onMounted, onUnmounted, ref} from "vue";

const timeNY = ref('');
const timeBJ = ref('');
const timeLDN = ref('');

const updateTime = () => {
  const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

  timeNY.value = new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'America/New_York' }).format(new Date());
  timeBJ.value = new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'Asia/Shanghai' }).format(new Date());
  timeLDN.value = new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'Europe/London' }).format(new Date());
};

let intervalId;

onMounted(() => {
  updateTime(); // 初始化时间
  intervalId = setInterval(updateTime, 1000); // 每秒更新时间
});

onUnmounted(() => {
  clearInterval(intervalId); // 组件卸载时清除计时器
});

</script>

<template>
  <div class="section-connect">
    <div class="container">
      <div class="header">
        <h2>
          <span class="text-stroke">Connect</span> With Us
        </h2>
        <p>Let's make something incredible together!</p>
        <router-link to="/" class="btn">
          <span>Get an estimate</span>
        </router-link>
      </div>
      <div class="footer">
        <p>*We operate on a global scale, delivering tailored solutions to clients globally.</p>
      </div>
      <div class="bottom-right">
        <div>{{timeNY}} - America / New York</div>
        <div>{{timeBJ}} - Asia / Bei Jing</div>
        <div>{{timeLDN}} - Europe / London</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
a {
  text-decoration: none;
}
.section-connect {
  height: 750px;
  width: 100%;
  background-color: #000000;
  display: flex;
  justify-content: center;
  .container {
    width: 79%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    .header {
      height: 92%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      h2 {
        color: #FFFFFF;
        text-transform: uppercase;
        font-size: 4.25rem;
        margin: 0;
        .text-stroke {
          -webkit-text-stroke: 1px #FFFFFF;
          color: transparent;

        }
      }
      p {
        color: #FFFFFF;
        font-size: 1.25rem;
      }
      .btn {
        margin-top: 80px;
        width: 250px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid #759201FF;
        background: linear-gradient(to right, #E3FE75FF 0%, #E3FE75FF 50%, #759201FF 50%, #759201FF 100%);
        background-size: 200% 100%; /* 两倍的宽度，用于实现从左到右的填充效果 */
        transition: background-position 0.2s; /* 过渡背景位置 */
        span {
          color: #000;
          font-size: 1.25rem;
          font-weight: bold;
        }
      }
      .btn:hover {
        background-position: -100% 0;
        span {
          color: #FFFFFF;
        }
      }

    }
    .footer {
      color: #FFFFFF;
      display: flex;
      justify-content: center;
      align-items: center;
      font-style: italic;
      font-size: 13px;
      font-weight: bold;
    }
    .bottom-right {
      position: absolute;
      color: #FFFFFF;
      right: 0;
      bottom: 3.5%;
      display: flex;
      flex-direction: column;
      font-size: 14px;
    }
  }
}
</style>
