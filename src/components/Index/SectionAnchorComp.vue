<script setup lang="ts">
const svgItems = [
  {
    id: 1,
    svgUrl: "../../src/assets/svg/svg_1.svg",
    title: "Website Design",
    text: "When it comes to web design, we're the expert. We've built website using major web technology & framework for backend systems and frontend applications."
  },{
    id: 2,
    svgUrl: "../../src/assets/svg/svg_2.svg",
    title: "Mobile App Development",
    text: "When it comes to web design, we're the expert. We've built website using major web technology & framework for backend systems and frontend applications."
  },{
    id: 3,
    svgUrl: "../../src/assets/svg/svg_3.svg",
    title: "E-Commerce",
    text: "We provide specialised e-Commerce consultancy services to large global and SME clients, integrating design and dedicated systems, built around the user's requirement while providing best consumer experience (CX)."
  },{
    id: 4,
    svgUrl: "../../src/assets/svg/svg_4.svg",
    title: "Activation Campaign/ Micrometer Development",
    text: "Regardless of the platform, Fuse builds interactive microsite that meets your campaign needs. Our dedicated website developer team can handle your needs."
  },{
    id: 5,
    svgUrl: "../../src/assets/svg/svg_5.svg",
    title: "AI Development Services",
    text: "Utilise our cutting edge personalised AI solutions. We can integrate multiple AI endpoint solutions & services to automate mundane processes and strengthen business intelligence."
  },{
    id: 6,
    svgUrl: "../../src/assets/svg/svg_6.svg",
    title: "Interactive Installation",
    text: "We connect audiences in a truly unique immersive way enabling users to enjoy multi-sensory, three-dimensional experiences and more for any event in Malaysia."
  },

]

</script>

<template>
  <div class="section-anchor">
    <div class="container">
      <div class="header">
        <h2>
          <span class="text-stroke">Our</span> Expertise
        </h2>
        <div class="text-lin">
          <p>More than just an executional collective, we work in tandem with you from the start of any project in the following roles:</p>
        </div>
      </div>
      <div class="client-list">
        <router-link to="/" class="client-item" v-for="item in svgItems" :key="item.id">
          <div class="left">
            <img :src="item.svgUrl" alt="">
          </div>
          <div class="right">
            <h3>{{item.title}}</h3>
            <p>{{item.text}}</p>
          </div>
        </router-link>
      </div>
      <div class="footer">
        <p>Discover the full range of our capabilities:</p>
        <p></p>
        <router-link to="/" class="btn">
          <span>More Service</span>
        </router-link>
      </div>
    </div>
  </div>

</template>

<style scoped lang="less">
.section-anchor {
  width: 100%;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 79%;
    height: 100%;

    .header {
      width: 60%;
      height: 27.5%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      h2 {
        font-size: 3.75rem;
        color: #FFFFFF;
      }
      .text-stroke {
        -webkit-text-stroke: 2px #FFFFFF; /* Safari 和 Chrome */
        color: transparent; /* 将文字颜色设置为透明，以使描边效果显现 */
      }
      .text-lin {
        font-size: 1.35rem;
        text-align: center;
        color: #FFFFFF;
      }
    }

    .client-list {
      margin-top: 2.5%;
      height: 52%;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      a {
        color: black;
      }

      .client-item {
        background-color: #fff;
        flex: 1 0 calc(33.333% - 10px);
        margin: 5px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;

        .left {
          width: 30%;
          display: flex;
          justify-content: center;
          img {
            padding-top: 20px;
            width: 110px;
            height: 110px;
          }
        }
        .right {
          width: 65%;
          height: 100%;
          margin-right: 5%;
          h3 {
            padding-top: 10px;
            width: 80%;
          }
          p {
            margin-top: 20px;
            font-size: 14px;
            color: #5B5B5BFF;
          }
        }
      }
    }

    .footer {
      height: 30%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      p {
        color: #FFFFFF;
        font-size: 1.5rem;
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
