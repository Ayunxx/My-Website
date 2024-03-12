<script setup lang="ts">
const bgiItems = [
  {
    id: 1,
    url: "commerce",
    title: "Commerce",
    text: "We're no stranger in developing ecommerce website in Malaysia. Our ecommerce web developer expert in building ecommerce solutions with Shopify, WooCommerce & Laravel.",
    lis: [
      "API Integrations",
      "Consumer Experience",
      "Digital Rebrand",
      "Website & Applications"
    ]
  },{
    id: 2,
    url: "event-industry",
    title: "Event & Entertainment",
    text: "We have partnered with a event agencies in Malaysia to develop interactive websites. Additionally, we specialize in developing custom solutions such as event business management software, event seating software and more.",
    lis: [
      "Branding",
      "CRM",
      "Digital Rebrand",
      "Portal Development"
    ]
  },{
    id: 3,
    url: "manufacturing-industry",
    title: "Retail & Manufacturing",
    text: "We have extensive experience in buildling retail shop software to improve your business ecosystem such as integrate with accounting system, logistic or warehouse.",
    lis: [
      "Digital Transformation",
      "Website & Applications",
      "Workflow Modernisation"
    ]
  },{
    id: 4,
    url: "agriculture-food",
    title: 'Agriculture & Food',
    text: 'We collaborate with companies, like Emborg, Texas Chicken & Gali Estate throughout the food and agriculture journey assisting them with business practices and refreshing their websites & agriculture custom software solution.',
    lis: [
      "Digital Rebrand",
      "Website & Applications",
      "Workflow Modernisation"
    ]
  },
]

</script>

<template>
  <div class="section-industries">
    <div class="container">
      <div class="header">
        <h2>We work across many industries - </h2><span class="text-lin"> find yours!</span>
      </div>
      <div class="main">
        <div class="item" :style="`background-image:url('../../src/assets/background/${item.url}.png');`" v-for="item in bgiItems" :key="item.id">
          <div class="absolute">
          </div>
          <div class="relative">
            <h3>{{item.title}}</h3>
            <p>{{item.text}}</p>
            <ul>
              <li v-for="(li,index) in item.lis" :key="index">{{li}}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer">
        <p>Haven’t found the right industry for you?</p>
        <span>Browse our software solutions for travel, lifestyle, education, and other industries.</span>
        <p></p>
        <p></p>
        <router-link to="/" class="btn">
          <span>View Service</span>
        </router-link>
        <p></p>
        <p></p>
      </div>
    </div>
  </div>

</template>

<style scoped lang="less">
.section-industries {
  margin-top: 100px;
  background-color: #161616FF;
  //height: 1100px;
  width: 100%;
  display: flex;
  justify-content: center;
  .container {
    width: 79%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .header {
      height: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.75rem;
      color: #FFFFFF;
      border-bottom: 1px solid #FFFFFF;

      .text-lin {
        -webkit-text-stroke: 1px #FFFFFF; /* Safari 和 Chrome */
        color: transparent; /* 将文字颜色设置为透明，以使描边效果显现 */
        font-size: 40px;
        font-weight: bold;

      }
    }

    .main {
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      height: 75%;
      width: 100%;

      .item {
        flex: 1 0 calc(48% - 20px);
        margin: 10px;
        box-sizing: border-box;
        height: 390px;
        filter: brightness(0.7); /* 初始亮度 */
        box-shadow: inset 0 -150px 50px rgba(0, 0, 0, 0.6);
        position: relative;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        .absolute {
          height: 100%;
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;

          img {
            width: 100%;
            height: 100%;

          }
        }

        .relative {
          width: 80%;
          position: relative;
          left: 5%;
          filter: brightness(1);
          h3 {
            color: white;
            font-size: 3rem;
            width: 55%;
          }
          p {
            color: white;
          }
          ul {
            display: flex;
            width: 100%;
            padding: 0;
            li {
              padding: 0 10px;
              list-style-type: none;
              height: 25px;
              font-size: 12px;
              margin: 0 5px;
              background-color: #fff;
              border-radius: 50px;
              display: flex;
              justify-content: center;
              align-items: center;

            }
          }
        }
      }
      .item:hover {
        filter: brightness(0.9); /* 初始亮度 */
        box-shadow: inset 0 -150px 50px rgba(0, 0, 0, 0.5);
      }
    }

    .footer {

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      p {
        color: #FFFFFF;
        font-size: 1.5rem;
        font-style: italic;
      }
      span {
        color: #FFFFFF;
        font-size: 1.5rem;
        font-style: italic;
      }
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
