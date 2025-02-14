<script setup lang="ts">
const clientItems = Array.from({ length: 24 }, (_, index) => ({
  id: index + 1,
  imageUrl: `/link/chariot_${index + 1}.png`,
  atlText: 'logo'
}));
</script>

<template>
  <div class="section-featured">
    <div class="container">
      <div class="header">
        <h2>
          <span class="text-stroke">尝试 了解</span> 我们
        </h2>
        <div class="text-lin">
          <p>我们擅长ui/ux设计、网站设计和开发、移动应用程序开发、分析和SEO，将这些融合在一起，打造强力的数字世界。</p>
          <p>我们的能力也许能为满足您需求的数字产品。</p>
        </div>
      </div>
      <div class="client-list">
        <div class="client-item" v-for="item in clientItems">
          <img :alt="item.atlText" :src="item.imageUrl">
        </div>
      </div>
      <div class="footer">
        <router-link to="/" class="btn">
          <span>查看更多</span>
        </router-link>
      </div>
    </div>
  </div>

</template>

<style scoped lang="less">

/* Styles for PC */
@media screen and (min-width: 1024px) {
  .section-featured {
    width: 100%;
    //height: 1200px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 80%;
      height: 100%;

      .header {
        width: 60%;
        height: 40%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        h2 {
          font-size: 3.75rem;
        }
        .text-stroke {
          -webkit-text-stroke: 2px black; /* Safari 和 Chrome */
          color: transparent; /* 将文字颜色设置为透明，以使描边效果显现 */
        }
        .text-lin {
          font-size: 1.35rem;
          text-align: center;
        }
      }

      .client-list {
        margin-top: 2.2%;
        height: 40%;
        width: 100%;
        display: flex;
        flex-wrap: wrap;

        .client-item {
          flex: 0 0 calc(16.66% - 20px);
          margin: 10px;
          box-sizing: border-box;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }

      .footer {
        height: 20%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 130px;
        margin-bottom: 90px;
        .btn {
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
    }
  }
}

/* Styles for tablets */
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .section-featured {
    width: 100%;
    //height: 1200px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 80%;
      height: 100%;

      .header {
        width: 60%;
        height: 40%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        h2 {
          font-size: 1.75rem;
        }
        .text-stroke {
          -webkit-text-stroke: 2px black; /* Safari 和 Chrome */
          color: transparent; /* 将文字颜色设置为透明，以使描边效果显现 */
        }
        .text-lin {
          font-size: 0.8rem;
          text-align: center;
        }
      }

      .client-list {
        margin-top: 2.2%;
        height: 40%;
        width: 100%;
        display: flex;
        flex-wrap: wrap;

        .client-item {
          flex: 0 0 calc(16.66% - 20px);
          margin: 10px;
          box-sizing: border-box;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }

      .footer {
        height: 20%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
        margin-bottom: 60px;
        .btn {
          width: 195px;
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
    }
  }
}

/* Styles for mobile phones */
@media screen and (max-width: 767px) {
  .section-featured {
    width: 100%;
    //height: 1200px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 80%;
      height: 100%;

      .header {
        width: 100%;
        height: 40%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        .text-stroke {
          -webkit-text-stroke: 2px black; /* Safari 和 Chrome */
          color: transparent; /* 将文字颜色设置为透明，以使描边效果显现 */
        }
        .text-lin {
          font-size: 0.8rem;
          text-align: center;
        }
      }

      .client-list {
        margin-top: 2.2%;
        height: 40%;
        width: 100%;
        display: flex;
        flex-wrap: wrap;

        .client-item {
          flex: 0 0 calc(32.66% - 20px);
          margin: 10px;
          box-sizing: border-box;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }

      .footer {
        height: 20%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
        margin-bottom: 60px;
        .btn {
          width: 195px;
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
            font-size: 1rem;
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
    }
  }
}

</style>
