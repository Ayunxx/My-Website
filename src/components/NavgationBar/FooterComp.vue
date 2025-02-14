<script setup lang="ts">

const services = [
  { id : 1,
    title: "软件开发",
  },
  { id : 2,
    title: "网站开发",
  },
  { id : 3,
    title: "应用程序设计",
  },
  { id : 4,
    title: "技术咨询",
  },
  { id : 5,
    title: "代码审查和优化",
  },
  { id : 6,
    title: "培训和教育",
  },
  { id : 7,
    title: "项目管理",
  },
  { id : 8,
    title: "维护和支持",
  },
]
const contacts = [
  {
    id: 1,
    title: "邮箱: zhuyuinternet@163.com"
  },
  {
    id: 2,
    title: "地址: 贵州省兴义市"
  }
]
</script>

<template>
  <footer class="b-footer">
    <div class="container">
      <div class="left">
        <h2>&lt;/&gt;祝余工作室</h2>
        <p>我们热衷于不断学习新技术和提高产品的使用深度以及优化体验。</p>
        <p></p>
      </div>
      <div class="right">
        <div class="left">
          <h3>服务</h3>
          <div class="list">
            <router-link to="/" v-for="i in services" :key="i.id">{{i.title}}</router-link>
          </div>
        </div>
        <div class="right">
          <h3>联系</h3>
          <div class="list">
            <router-link to="/" v-for="i in contacts" :key="i.id" style="word-wrap: break-word">{{i.title}}</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <p>© Copyright 2025. 祝余 All rights reserved.</p>
      <div class="svg">
        <img src="/svg/lih.svg" alt="">
      </div>
    </div>
  </footer>
</template>

<style scoped lang="less">
a {
  text-decoration: none;
}
.b-footer {
  width: 100%;
  //height: 525px;
  display: flex;
  justify-content: center;
  background-color: #161616FF;
  color: #cbcbcb;
  flex-direction: column;
  align-items: center;
  .container {
    margin-top: 50px;
    height: 80%;
    width: 95%;
    display: flex;
    .left {
      width: 60%;
      h2 {
        width: 40%;
      }
      p {
        width: 43%;
      }
    }
    .right {
      width: 40%;
      display: flex;
      font-size: 1.25rem;
      .left {
        width: 40%;
        h3 {
          margin-top: 20px;
        }
        .list {
          display: flex;
          flex-direction: column;
          width: 70%;
          a {
            color: #cbcbcb;
            margin: 10px 0;
            font-size: 15px;
          }
        }
      }
      .right {
        width: 60%;
        display: flex;
        flex-direction: column;
        h3 {
          margin-top: 20px;
        }
        .list {
          display: flex;
          flex-direction: column;
          width: 70%;
          a {
            color: #cbcbcb;
            margin: 10px 0;
            font-size: 15px;
          }
        }
      }
    }
  }
  .copyright {
    margin-top: 2%;
    height: 8%;
    background-color: #D0D0D0FF;
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;

    p {
      margin-left: 10%;
      color: black;
      font-size: 13px;
    }
    .svg {
      height: 14px;
      width: 14px;
      position: absolute;
      right: 10%;
    }
  }
}
</style>
