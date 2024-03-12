<script setup lang="ts">

</script>

<template>
  <footer class="b-footer">
    <div class="container">
      <div class="left">
        <h2>About Fuse</h2>
        <p>Fuse Solutions is a company with a significant history in the development of digital commerce experiences, providing a broad spectrum of services such as full-service digital commerce solutions, consulting, and creative productions. Our operations are centered in Asia, with offices located in Malaysia.</p>
      </div>
      <div class="right">
        <div class="left">
          <h3>Our Services</h3>
          <div class="list">
            <router-link to="/" v-for="i in 8">{{i}}</router-link>
          </div>
        </div>
        <div class="right">
          <h3>Contact Us</h3>
          <div class="list">
            <router-link to="/" v-for="i in 4">{{i}}</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <p>© Copyright 2024. Fuse Solutions Sdn Bhd (1335285-H) All rights reserved.</p>
      <div class="svg">
        <img src="@/assets/svg/lih.svg" alt="">
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
  height: 525px;
  display: flex;
  justify-content: center;
  background-color: #161616FF;
  color: #cbcbcb;
  flex-direction: column;
  align-items: center;
  .container {
    margin-top: 50px;
    height: 80%;
    width: 79%;
    display: flex;
    .left {
      width: 70%;
      h2 {
        width: 40%;
      }
      p {
        width: 43%;
      }
    }
    .right {
      width: 33%;
      display: flex;
      font-size: 1.25rem;
      .left {
        width: 50%;
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
        width: 50%;
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
      margin-left: 200px;
      color: black;
      font-size: 13px;
    }
    .svg {
      height: 14px;
      width: 14px;
      position: absolute;
      right: 300px;
    }
  }
}
</style>
