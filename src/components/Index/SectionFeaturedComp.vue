<script setup lang="ts">
const clientItems = Array.from({ length: 24 }, (_, index) => ({
  id: index + 1,
  imageUrl: `../../src/assets/link/chariot_${index + 1}.png`,
  atlText: 'logo'
}));
</script>

<template>
  <div class="section-featured">
    <div class="container">
      <div class="header">
        <h2>
          <span class="text-stroke">Welcome to</span> Fuse Solutions
        </h2>
        <div class="text-lin">
          <p>We`re skilled in ui/ux design, website design & development, mobile app development, analytics & SEO, fused together to cater particularly to the digital world.</p>
          <p>Our forte is furnishing our clients with digital products that focuses and meet their wants and needs.</p>
        </div>
      </div>
      <div class="client-list">
        <div class="client-item" v-for="item in clientItems">
          <img :alt="item.atlText" :src="item.imageUrl">
        </div>
      </div>
      <div class="footer">
        <router-link to="/" class="btn">
          <span>Talk to our team</span>
        </router-link>
      </div>
    </div>
  </div>

</template>

<style scoped lang="less">
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

</style>
