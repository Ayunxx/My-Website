<script setup lang="ts">
import {onMounted, onUnmounted, ref} from "vue";

const timeNY = ref('');
const timeSH = ref('');
const timeLDN = ref('');


const updateTime = () => {
  const options: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

  timeNY.value = new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'America/New_York' }).format(new Date());
  timeSH.value = new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'Asia/Shanghai' }).format(new Date());
  timeLDN.value = new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'Europe/London' }).format(new Date());
};

let intervalId: any;

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
          <span class="text-stroke">与我</span> 联系
        </h2>
        <p>让我们一起做一些不可思议的事情！</p>
        <router-link to="/" class="btn">
          <span>获取联系</span>
        </router-link>
      </div>
      <div class="footer">
        <p>*如果你有任何问题、想法或者需要帮助，我总是在这里</p>
      </div>
      <div class="bottom-right">
        <div>{{timeNY}} - 美国 / 纽约</div>
        <div>{{timeSH}} - 亚洲 / 上海</div>
        <div>{{timeLDN}} - 欧洲 / 伦敦</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
a {
  text-decoration: none;
}

/* Styles for PC */
@media screen and (min-width: 1024px) {
  /* PC styles */
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

}

/* Styles for tablets */
@media screen and (min-width: 768px) and (max-width: 1023px) {
  /* Tablet styles */
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
          font-size: 3.25rem;
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
        right: -60px;
        bottom: 3.5%;
        display: flex;
        flex-direction: column;
        font-size: 14px;
      }
    }
  }

}

/* Styles for mobile phones */
@media screen and (max-width: 767px) {
  /* Mobile styles */
  .section-connect {
    height: 700px;
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
        height: 75%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h2 {
          color: #FFFFFF;
          text-transform: uppercase;
          font-size: 2.25rem;
          margin: 0;
          .text-stroke {
            -webkit-text-stroke: 1px #FFFFFF;
            color: transparent;

          }
        }
        p {
          color: #FFFFFF;
          font-size: 1rem;
        }
        .btn {
          margin-top: 80px;
          width: 200px;
          height: 45px;
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

}

</style>
