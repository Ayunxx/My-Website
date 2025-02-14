<script setup lang="ts">
const svgItems = [
  {
    id: 1,
    svgUrl: "/svg/svg_1.svg",
    title: "电信",
    text: "/"
  },{
    id: 2,
    svgUrl: "/svg/svg_2.svg",
    title: "公共事业",
    text: "/"
  },{
    id: 3,
    svgUrl: "/svg/svg_3.svg",
    title: "高新科技",
    text: "/"
  },{
    id: 4,
    svgUrl: "/svg/svg_4.svg",
    title: "互联网",
    text: "/"
  },{
    id: 5,
    svgUrl: "/svg/svg_5.svg",
    title: "数字化金融",
    text: "/"
  },{
    id: 6,
    svgUrl: "/svg/svg_6.svg",
    title: "云集",
    text: "/"
  },

]

</script>

<template>
  <div class="section-anchor">
    <div class="container">
      <div class="header">
        <h2>
          <span class="text-stroke">看见</span> 即所得
        </h2>
        <div class="text-lin">
          <p>您所在的领域属于？</p>
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
        <p>探索全方位能力</p>
        <p></p>
        <router-link to="/" class="btn">
          <span>更多</span>
        </router-link>
      </div>
    </div>
  </div>

</template>

<style scoped lang="less">

/* Styles for PC */
@media screen and (min-width: 1024px) {
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

}

/* Styles for tablets */
@media screen and (min-width: 768px) and (max-width: 1023px) {
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
          font-size: 2.75rem;
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
            width: 50%;
            display: flex;
            justify-content: center;
            img {
              padding-top: 20px;
              width: 85px;
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
}

/* Styles for mobile phones */
@media screen and (max-width: 767px) {
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
      width: 95%;
      height: 100%;

      .header {
        width: 70%;
        height: 27.5%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        h2 {
          font-size: 1.75rem;
          color: #FFFFFF;
        }
        .text-stroke {
          -webkit-text-stroke: 2px #FFFFFF; /* Safari 和 Chrome */
          color: transparent; /* 将文字颜色设置为透明，以使描边效果显现 */
        }
        .text-lin {
          font-size: 1rem;
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
            //width: 30%;
            display: flex;
            justify-content: center;
            img {
              padding-top: 20px;
              //width: 75px;
              height: 110px;
            }
          }
          .right {
            width: 65%;
            height: 100%;
            margin-left: 5%;
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
          font-size: 1rem;
        }
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
