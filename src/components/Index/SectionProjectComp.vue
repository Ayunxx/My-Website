<script setup lang="ts">
const projectItem = [
  {
    id: 1,
    name: "Embargo",
    lis: [
      "API Integration",
      "Campaign",
      "Multi-Regional Website",
      "SEO",
      "Website Development",
    ]
  },
  {
    id: 2,
    name: "Bistro Ã  Table",
    lis: [
      "Frontend Development",
      "UI/UX Design",
      "Website",
      "Wordpress",
    ]
  },
  {
    id: 3,
    name: "Konica Minolta ASEAN",
    lis: [
      "API Integration",
      "Frontend Development",
      "UI/UX Design",
      "Website",
    ]
  },
  {
    id: 4,
    name: "The Exchange TRX",
    lis: [
      "API Integration",
      "AWS",
      "HTML5",
      "Phaser",
      "UI/UX Design",
    ]
  },
  {
    id: 5,
    name: "TM Mengukir Malaysia",
    lis: [
      "API Integration",
      "AWS",
      "HTML5",
      "Phaser",
      "UI/UX Design",
    ]
  },
  {
    id: 6,
    name: "Guinness Flavour By Fire",
    lis: [
      "Laravel",
      "On Ground Activation",
      "UI/UX Design",
    ]
  },
  {
    id: 7,
    name: "Guinness Flavour By Fire",
    lis: [
      "Campaign",
      "Frontend Development",
      "Website",
    ]
  },{
    id: 8,
    name: "Innisfree #ABCD Marathon",
    lis: [
      "Campaign",
      "Frontend Development",
      "Game",
      "Phaser",
    ]
  },
]
</script>

<template>
  <div class="section-projects">
    <div class="container">
      <div class="header">
        <h2>
          <span class="text-stroke">My</span> Project
        </h2>
      </div>
      <div class="main">
        <div class="title">
          <div class="left">Project Name</div>
          <div class="right">Categories</div>
        </div>
        <router-link to="/" class="items" v-for="item in projectItem" :key="item.id">
          <div class="item">
            <div class="left">{{item.name}}</div>
            <div class="right">
              <ul v-if="item.lis.length != 0">
                <li v-for="i in item.lis">{{i}}</li>
              </ul>
            </div>
            <div class="svg">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
                <path d="M0.0170528 12.1937L0.0170526 9.5626L17.2763 9.5626C13.7633 8.01488 11.3195 4.60995 11.1667 0.740628L13.7636 0.740628C14.3745 4.76472 17.1238 8.16965 20.9423 9.5626L20.9423 12.1937C17.1238 13.5866 14.3745 16.8368 13.7636 21.0156L11.1667 21.0156C11.3195 17.1463 13.7633 13.7414 17.2763 12.1937L0.0170528 12.1937Z"></path>
              </svg>
            </div>
          </div>
        </router-link>
      </div>
      <div class="footer">
        <div class="btn-group">
          <div class="btn-1">
            <router-link to="/">
              <span>Start you project</span>
            </router-link>
          </div>
          <div class="btn-2">
            <router-link to="/">
              <span>View our work</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped lang="less">
.section-projects {
  width: 100%;
  background-color: #000000;
  display: flex;
  justify-content: center;

  .container {
    width: 79%;
    height: 100%;
    .header {
      padding-top: 80px;
      width: 100%;
      h2 {
        font-size: 3.75rem;
        color: #FFFFFF;
      }
      .text-stroke {
        -webkit-text-stroke: 2px #FFFFFF; /* Safari 和 Chrome */
        color: transparent; /* 将文字颜色设置为透明，以使描边效果显现 */
      }
    }
    .main {
      width: 100%;
      .title {
        width: 100%;
        height: 50px;
        display: flex;
        color: #9CA3AFFF;
        border-bottom: 1px solid #FFFFFF;
        font-weight: bold;
        font-size: 1.25rem;

        .left {
          width: 40%;
          height: 100%;
          display: flex;
          align-items: center;
        }
        .right {
          width: 60%;
          height: 100%;
          display: flex;
          align-items: center;
        }
      }
      .items {
        height: 78px;
        width: 100%;
        display: inline-block;
        font-size: 20px;
        border-bottom: 1px solid #FFFFFF;
        .item {
          width: 100%;
          height: 100%;
          display: flex;
          position: relative;
          line-height: 100px;
          text-align: center;
          overflow: hidden;

          .left {
            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
            font-weight: bold;
            color: #FFFFFF;
            position: relative;
            z-index: 2;
            transition: transform 0.2s ease;
          }
          .right {
            width: 55%;
            height: 100%;
            display: flex;
            align-items: center;
            color: black;
            position: relative;
            z-index: 2;
            transition: transform 0.2s ease;
            ul {
              display: flex;
              width: 92%;
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
          .svg {
            width: 5%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            z-index: 2;
            svg {
              fill: #FFFFFF;
            }
          }
        }
        @keyframes floatAnimation {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .item:hover {
          .left {
            color: black;
            transform: translateX(20px);
          }
          .right {
            transform: translateX(20px);
            li {
              background-color: #E3FE75FF;
            }
          }
          .svg {
            svg {
              fill: black;
              animation: floatAnimation 2s ease-in-out infinite;
            }
          }
        }
        .item::before {
          content: "";
          position: absolute;
          top: 100%; /* 开始时隐藏在元素下方 */
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #FFFFFF; /* 悬停时的背景色 */
          transition: top 0.2s ease; /* 过渡动画 */
          z-index: 1;
        }
        .item:hover::before {
          top: 0; /* 悬停时背景色填充至顶部 */
        }
      }
    }
    .footer {
      margin-top: 50px;
      margin-bottom: 100px;
      .btn-group {
        margin: 20px 0;
        height: 65px;
        width: 40%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .btn-1 {
          width: 45%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 2px solid #759201FF;
          background: linear-gradient(to right, #E3FE75FF 0%, #E3FE75FF 50%, #759201FF 50%, #759201FF 100%);
          background-size: 200% 100%; /* 两倍的宽度，用于实现从左到右的填充效果 */
          transition: background-position 0.2s; /* 过渡背景位置 */
          a {
            color: #000;
            font-size: 18px;
            font-weight: bold;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
        .btn-1:hover {
          background-position: -100% 0;
          //color: #759201FF;
          a {
            color: #FFFFFF;
          }
        }
        .btn-2 {
          width: 45%;
          height: 100%;
          border: 2px solid #FFFFFF;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(to right, #000000 0%, #000000 50%, #FFFFFF 50%, #FFFFFF 100%);
          background-size: 200% 100%; /* 两倍的宽度，用于实现从左到右的填充效果 */
          transition: background-position 0.2s; /* 过渡背景位置 */
          a {
            height: 100%;
            width: 100%;
            color: #FFFFFF;
            font-weight: bold;
            font-size: 18px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
        .btn-2:hover {
          background-position: -100% 0;
          a {
            color: #000000;
          }
        }
      }
    }
  }
}

</style>
