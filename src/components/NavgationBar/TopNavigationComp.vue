<script setup lang="ts">

// 响应式变量，控制.hide-banner的显示
import {onMounted, onUnmounted, ref} from "vue";
import anime from "animejs";

const showBanner = ref(false);
// 鼠标进入li-2时调用的方法
const onMouseEnter = () => {
  showBanner.value = true;
};

// 鼠标离开li-2时调用的方法
const onMouseLeave = () => {
  showBanner.value = false;
};

const headerRef = ref(null);
let lastScrollY = 0;

const handleScroll = () => {
  const currentScrollY = window.scrollY || document.documentElement.scrollTop;
  const header = headerRef.value;

  if (currentScrollY > lastScrollY) {
    // 向下滚动 - 隐藏导航栏
    anime({
      targets: header,
      top: -120, // 假设导航栏高度为120px
      duration: 150,
      easing: 'easeInOutQuad'
    });
  } else {
    // 向上滚动 - 显示导航栏
    anime({
      targets: header,
      top: 0,
      duration: 150,
      easing: 'easeInOutQuad'
    });
  }

  lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const qdProjects = [
  {
    id: 1,
    title: "/",
    url: "/"
  }
]
const hdProject = [
  {
    id: 1,
    title: "/",
    url: "/"
  }
]
const games = [
  {
    id: 1,
    title: "/",
    url: "/"
  }
]

</script>

<template>
  <header class="site-header" ref="headerRef">
    <div class="site-header-target">
      <div class="site-header-left">
        <router-link to="/" class="btn">
          <img alt="" src="../../../public/logo.png" style="width: 100px;height: 90px">
        </router-link>
      </div>
      <div class="site-header-container">
        <nav class="navi">
          <ul class="menu">
            <li class="li-1">
              <router-link to="/">
                <span>首页</span>
              </router-link>
            </li>
            <li class="li-2" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
              <router-link to="/">
                <span>项目案例</span>
              </router-link>
              <ul class="sub-menu">
                <li class="sub-li" v-for="i in qdProjects" :key="i.id">
                  <a :href="i.url" target="_blank">
                    <span>{{ i.title }}</span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="li-2" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
              <router-link to="/">
                <span>开源项目</span>
              </router-link>
              <ul class="sub-menu">
                <li class="sub-li" v-for="i in hdProject" :key="i.id">
                  <a :href="i.url" target="_blank">
                    <span>{{i.title}}</span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="li-2" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
              <router-link to="/">
                <span>关于我们</span>
              </router-link>
              <ul class="sub-menu">
                <li class="sub-li" v-for="i in games" :key="i.id">
                  <a :href="i.url" target="_blank">
                    <span>{{i.title}}</span>
                  </a>
                </li>
              </ul>
            </li>
<!--            <li class="li-1">-->
<!--              <a href="http://ezsay.fun/blog">-->
<!--                <span>博客</span>-->
<!--              </a>-->
<!--            </li>-->
          </ul>
        </nav>
      </div>
<!--      <div class="site-header-right">-->
<!--        <a href="https://github.com/Ayunxx/My-Website" class="btn">-->
<!--          <span>My GitHub</span>-->
<!--        </a>-->
<!--      </div>-->
    </div>
    <div class="hide-banner" v-show="showBanner"></div>
  </header>
</template>

<style scoped lang="less">
a {
  text-decoration: none;
}
@media screen and (min-width: 1024px) {
  .site-header {
    background-color: #000000;
    height: 120px;
    transition: top 0.3s;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 888;

    .hide-banner {
      height: 500px;
      width: 100%;
      background-color: #000000;
      display: block;
    }

    .site-header-target {
      height: 100%;
      width: 80%;
      margin: auto;
      display: flex;

      .site-header-left {
        height: 100%;
        width: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        .btn {
          height: 80%;
          width: 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }

      }
      .site-header-container {
        height: 100%;
        //background-color: saddlebrown;
        width: 50%;
        margin-left: 20%;
        margin-right: 10%;
        .navi {
          height: 100%;
          width: 100%;
          .menu {
            display: flex;
            list-style-type: none;
            padding: 0;
            height: 100%;
            width: 100%;
            margin: 0;
            font-size: 1.5rem;

            .li-1 {
              height: 100%;
              flex-grow: 1;
              display: flex;
              justify-content: center;
              align-items: center;
              position: relative;
              span {
                color: #A2A2A2FF;;
              }
            }
            .li-1:hover {
              span {
                color: #FFFFFF;
              }
            }
            .li-2 {
              height: 100%;
              flex-grow: 1;
              display: flex;
              justify-content: center;
              align-items: center;
              position: relative;
              span {
                color: #FFFFFF;
              }
              .sub-menu {
                position: absolute;
                top: 100%;
                left: 0;
                width: 800px;
                display: none; /* 初始状态隐藏子菜单 */
                color: #A2A2A2FF;
                text-align: left; /* 让子菜单内的内容左对齐 */
                padding: 15px;
                margin: 0;
                font-size: 1.5rem;
                .sub-li {
                  height: 50px;
                  list-style-type: none;
                  span {
                    color: #A2A2A2FF;
                  }
                }
                .sub-li:hover {
                  span {
                    color: #FFFFFF;
                  }
                }
              }
            }
            .li-2::after {
              content: "";
              position: absolute;
              left: 25%;
              bottom: 20px; /* 调整下边框的位置 */
              width: 50%;
              height: 3px; /* 下边框的高度 */
              background-color: transparent; /* 初始状态为透明 */
              transition: background-color 0.3s; /* 添加过渡效果 */
            }
            .li-2:hover::after {
              background-color: #FFFFFF; /* 鼠标悬停时改变颜色 */
            }
            .li-2:hover .sub-menu {
              display: block;
            }
          }
        }

      }
      .site-header-right {
        width: 250px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .btn {
          height: 50px;
          width: 250px;
          //background-color: #CACCBFFF;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(to right, #CACCBFFF 0%, #CACCBFFF 50%, #000000 50%, #000000 100%);
          background-size: 200% 100%; /* 两倍的宽度，用于实现从左到右的填充效果 */
          transition: background-position 0.2s; /* 过渡背景位置 */
          border: 2px solid #CACCBFFF;
          color: black;
          text-decoration: none;
          font-weight: bold;
        }
        .btn:hover {
          background-position: -100% 0;
          color: #CACCBFFF;
        }
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .site-header {
    background-color: #000000;
    height: 65px;
    transition: top 0.3s;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 888;

    .hide-banner {
      height: 500px;
      width: 100%;
      background-color: #000000;
      display: block;
    }

    .site-header-target {
      height: 100%;
      width: 95%;
      margin: auto;
      display: flex;

      .site-header-left {
        height: 100%;
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        .btn {
          height: 80%;
          width: 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }

      }
      .site-header-container {
        height: 100%;
        //background-color: saddlebrown;
        width: 50%;
        margin-left: 10%;
        margin-right: 10%;
        .navi {
          height: 100%;
          width: 100%;
          .menu {
            display: flex;
            list-style-type: none;
            padding: 0;
            height: 100%;
            width: 100%;
            margin: 0;
            font-size: 1rem;

            .li-1 {
              height: 100%;
              flex-grow: 1;
              display: flex;
              justify-content: center;
              align-items: center;
              position: relative;
              span {
                color: #A2A2A2FF;;
              }
            }
            .li-1:hover {
              span {
                color: #FFFFFF;
              }
            }
            .li-2 {
              height: 100%;
              flex-grow: 1;
              display: flex;
              justify-content: center;
              align-items: center;
              position: relative;
              span {
                color: #FFFFFF;
              }
              .sub-menu {
                position: absolute;
                top: 100%;
                left: 0;
                width: 800px;
                display: none; /* 初始状态隐藏子菜单 */
                color: #A2A2A2FF;
                text-align: left; /* 让子菜单内的内容左对齐 */
                padding: 15px;
                margin: 0;
                font-size: 1rem;
                .sub-li {
                  height: 50px;
                  list-style-type: none;
                  span {
                    color: #A2A2A2FF;
                  }
                }
                .sub-li:hover {
                  span {
                    color: #FFFFFF;
                  }
                }
              }
            }
            .li-2::after {
              content: "";
              position: absolute;
              left: 25%;
              bottom: 20px; /* 调整下边框的位置 */
              width: 50%;
              height: 3px; /* 下边框的高度 */
              background-color: transparent; /* 初始状态为透明 */
              transition: background-color 0.3s; /* 添加过渡效果 */
            }
            .li-2:hover::after {
              background-color: #FFFFFF; /* 鼠标悬停时改变颜色 */
            }
            .li-2:hover .sub-menu {
              display: block;
            }
          }
        }

      }
      .site-header-right {
        width: 100px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .btn {
          height: 50px;
          width: 250px;
          //background-color: #CACCBFFF;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(to right, #CACCBFFF 0%, #CACCBFFF 50%, #000000 50%, #000000 100%);
          background-size: 200% 100%; /* 两倍的宽度，用于实现从左到右的填充效果 */
          transition: background-position 0.2s; /* 过渡背景位置 */
          border: 2px solid #CACCBFFF;
          color: black;
          text-decoration: none;
          font-weight: bold;
        }
        .btn:hover {
          background-position: -100% 0;
          color: #CACCBFFF;
        }
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .site-header {
    background-color: #000000;
    height: 65px;
    transition: top 0.3s;
    width: 100%;
    .hide-banner {
      height: 500px;
      width: 100%;
      background-color: #000000;
      display: block;
    }

    .site-header-target {
      height: 100%;
      width: 95%;
      margin: auto;
      display: flex;
      justify-content: space-between;

      .site-header-left {
        height: 100%;
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        .btn {
          height: 80%;
          width: 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }

      }
      .site-header-container {
        display: none;
        height: 100%;
        //background-color: saddlebrown;
        width: 50%;
        margin-left: 10%;
        margin-right: 10%;
        .navi {
          height: 100%;
          width: 100%;
          .menu {
            display: flex;
            list-style-type: none;
            padding: 0;
            height: 100%;
            width: 100%;
            margin: 0;
            font-size: 1rem;

            .li-1 {
              height: 100%;
              flex-grow: 1;
              display: flex;
              justify-content: center;
              align-items: center;
              position: relative;
              span {
                color: #A2A2A2FF;;
              }
            }
            .li-1:hover {
              span {
                color: #FFFFFF;
              }
            }
            .li-2 {
              height: 100%;
              flex-grow: 1;
              display: flex;
              justify-content: center;
              align-items: center;
              position: relative;
              span {
                color: #FFFFFF;
              }
              .sub-menu {
                position: absolute;
                top: 100%;
                left: 0;
                width: 800px;
                display: none; /* 初始状态隐藏子菜单 */
                color: #A2A2A2FF;
                text-align: left; /* 让子菜单内的内容左对齐 */
                padding: 15px;
                margin: 0;
                font-size: 1rem;
                .sub-li {
                  height: 50px;
                  list-style-type: none;
                  span {
                    color: #A2A2A2FF;
                  }
                }
                .sub-li:hover {
                  span {
                    color: #FFFFFF;
                  }
                }
              }
            }
            .li-2::after {
              content: "";
              position: absolute;
              left: 25%;
              bottom: 20px; /* 调整下边框的位置 */
              width: 50%;
              height: 3px; /* 下边框的高度 */
              background-color: transparent; /* 初始状态为透明 */
              transition: background-color 0.3s; /* 添加过渡效果 */
            }
            .li-2:hover::after {
              background-color: #FFFFFF; /* 鼠标悬停时改变颜色 */
            }
            .li-2:hover .sub-menu {
              display: block;
            }
          }
        }

      }
      .site-header-right {
        width: 100px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .btn {
          height: 50px;
          width: 250px;
          //background-color: #CACCBFFF;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(to right, #CACCBFFF 0%, #CACCBFFF 50%, #000000 50%, #000000 100%);
          background-size: 200% 100%; /* 两倍的宽度，用于实现从左到右的填充效果 */
          transition: background-position 0.2s; /* 过渡背景位置 */
          border: 2px solid #CACCBFFF;
          color: black;
          text-decoration: none;
          font-weight: bold;
        }
        .btn:hover {
          background-position: -100% 0;
          color: #CACCBFFF;
        }
      }
    }
  }
}


</style>
