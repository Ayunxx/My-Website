<script setup lang="ts">
import {nextTick, ref, watch} from "vue";
import anime from "animejs";

const toggles = [
  {
    svg: "/svg/speed.svg",
    title: "创造力",
    content: "编程是一种创造性工作，它允许我从零开始构建新事物。无论是开发应用程序、设计网站还是创建游戏，编程都能让我将创意变为现实。"
  },
  {
    svg: "/svg/team.svg",
    title: "满足感",
    content: "编程本质上是解决问题的过程。面对一个复杂的问题，通过逻辑思考、创新和技术技巧找到解决方案，这个过程能带来极大的满足感和成就感。"
  },
  {
    svg: "/svg/team-integration.svg",
    title: "学习和成长",
    content: "技术领域是快速发展的，总有新的语言、框架和工具等待学习。这种不断的学习和适应新技术的过程，使得编程成为一个充满挑战和成长的职业道路。"
  },
  {
    svg: "/svg/legacy-modernisation.svg",
    title: "良好的职业前景",
    content: "随着技术的不断进步，编程技能的需求持续增长。无论是传统行业还是新兴行业，编程专业人才都非常受欢迎，职业前景广阔。"
  },
  {
    svg: "/svg/line-straight-to-points.svg",
    title: "社区和协作",
    content: "全球范围内有庞大的开发者社区，提供了无数的学习资源、开源项目和协作机会。成为这个社区的一员，不仅能学习到最新的技术，还能与来自世界各地的人们交流和合作。"
  }
]



const activeIndex = ref<any>(null);
const contentRefs = ref([]);



const toggle = (index: number) => {
  if (activeIndex.value === index) {
    activeIndex.value = null; // 如果点击的是已展开的面板，则折叠
  } else {
    activeIndex.value = index; // 展开新的面板
  }
};

// 监听activeIndex的变化来执行动画
watch(activeIndex, async (newIndex, oldIndex) => {
  await nextTick(); // 确保DOM更新
  contentRefs.value.forEach((el:HTMLElement, index) => {
    if (index === newIndex ) {
      anime({
        targets: el,
        height: el.scrollHeight, // 动态计算需要展开的高度
        duration: 100,
        easing: 'easeInOutQuad',
      });
      anime({
        targets: `.accordion-${index}`,
        height: `${100 + el.scrollHeight}`,
        duration: 300,
        easing: 'easeInOutQuad'
      });
      anime({
        targets: `.accordion-${index} svg`,
        rotate: '180deg', // 旋转360度
        duration: 300, // 动画持续时间2000毫秒（2秒）
        easing: 'linear' // 线性动画速度
      });
    } else if (index === oldIndex) {
      // 折叠之前展开的面板
      anime({
        targets: el,
        height: 0, // 折叠面板
        duration: 100,
        easing: 'easeInOutQuad',
      });
      anime({
        targets: `.accordion-${index}`,
        height: `100px`,
        duration: 300,
        easing: 'easeInOutQuad'
      });
      anime({
        targets: `.accordion-${index} svg`,
        rotate: '0deg', // 旋转360度
        duration: 300, // 动画持续时间2000毫秒（2秒）
        easing: 'linear' // 线性动画速度
      });
    }
  });
});

</script>

<template>
  <div class="section-faq-light">
    <div class="container">
      <div class="left">
        <h2>
          <span class="text-stroke">为什么选择</span>
          <br>
          <span>我们?</span>
        </h2>
        <p>
          编程是一扇通往无限可能世界的门，每行代码都在编织创造的梦想。</p>
      </div>
      <div class="right">
        <div class="accordion" v-for="(item, index) in toggles" :key="index" :class="`accordion-${index}`">
          <button class="btn" @click="toggle(index)">
            <img :src="item.svg" alt="">
            <span>{{item.title}}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="#000000">
              <path d="M8.89863 0.55575L11.5297 0.555749L11.5297 17.815C13.0774 14.302 16.4824 11.8582 20.3517 11.7054L20.3517 14.3023C16.3276 14.9132 12.9227 17.6625 11.5297 21.481L8.89863 21.481C7.50568 17.6625 4.25553 14.9132 0.0766598 14.3023L0.0766597 11.7054C3.94598 11.8582 7.35091 14.302 8.89863 17.815L8.89863 0.55575Z"></path>
            </svg>
          </button>
          <div v-show="activeIndex == index" class="content" ref="contentRefs" :class="`contend-${index}`">
            <p style="color:#000;">{{item.content}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped lang="less">
/* Styles for PC */
@media screen and (min-width: 1024px) {
  .section-faq-light {
    background-color: #fff;
    width: 100%;
    display: flex;
    justify-content: center;
    .container {
      width: 79%;
      //background-color: skyblue;
      height: 50%;
      display: flex;
      padding-bottom: 100px;
      .left {
        padding-top: 50px;
        width: 35%;
        height: 100%;
        //background-color: salmon;
        .text-stroke {
          -webkit-text-stroke: 2px black; /* Safari 和 Chrome */
          color: transparent; /* 将文字颜色设置为透明，以使描边效果显现 */
          font-size: 2.25rem;
        }
        span {
          font-size: 2.25rem;
        }
        p {
          margin-top: 40px;
          font-size: 1.25rem;
          color: #444444;
          width: 70%;
        }
      }
      .right {
        padding-top: 210px;
        width: 65%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .accordion {
          width: 100%;
          border-bottom: 1px solid #000000;
          height: 100px;
          margin: 10px 0;
          .btn {
            width: 100%;
            color: #000000;
            display: flex;
            background: none; /* 移除默认的背景 */
            border: none; /* 移除边框 */
            padding: 0; /* 移除内边距 */
            margin:  0;
            font: inherit; /* 使用继承的字体样式 */
            cursor: pointer; /* 保持指针样式为手形光标 */
            outline: inherit; /* 在聚焦时使用继承的轮廓样式 */
            img {
              height: 75px;
              width: 75px;
            }
            span {
              font-size: 2rem;
              font-weight: bold;
              width: 94%;
              height: 75px;
              display: flex;
              align-items: center;
              margin-left: 20px;
            }
            svg {
              height: 75px;
              display: flex;
              align-items: center;
            }
          }
          .content {
            overflow: hidden; /* 隐藏溢出内容 */
            height: 0; /* 初始高度为0，确保面板开始时是折叠的 */
            transition: height 300ms ease-in-out; /* 平滑过渡效果 */
            font-size: 1.55rem;
          }
        }
      }
    }
  }

}

/* Styles for tablets */
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .section-faq-light {
    background-color: #fff;
    width: 100%;
    display: flex;
    justify-content: center;
    .container {
      width: 79%;
      //background-color: skyblue;
      height: 50%;
      display: flex;
      padding-bottom: 100px;
      .left {
        padding-top: 50px;
        width: 35%;
        height: 100%;
        //background-color: salmon;
        .text-stroke {
          -webkit-text-stroke: 2px black; /* Safari 和 Chrome */
          color: transparent; /* 将文字颜色设置为透明，以使描边效果显现 */
          font-size: 1.55rem;
        }
        span {
          font-size: 1.55rem;
        }
        p {
          margin-top: 40px;
          font-size: 1.25rem;
          color: #444444;
          width: 70%;
        }
      }
      .right {
        padding-top: 210px;
        width: 65%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .accordion {
          width: 100%;
          border-bottom: 1px solid #000000;
          height: 100px;
          margin: 10px 0;
          .btn {
            width: 100%;
            color: #000000;
            display: flex;
            background: none; /* 移除默认的背景 */
            border: none; /* 移除边框 */
            padding: 0; /* 移除内边距 */
            margin:  0;
            font: inherit; /* 使用继承的字体样式 */
            cursor: pointer; /* 保持指针样式为手形光标 */
            outline: inherit; /* 在聚焦时使用继承的轮廓样式 */
            img {
              height: 75px;
              width: 75px;
            }
            span {
              font-size: 1.25rem;
              font-weight: bold;
              width: 94%;
              height: 75px;
              display: flex;
              align-items: center;
              margin-left: 20px;
            }
            svg {
              height: 75px;
              display: flex;
              align-items: center;
            }
          }
          .content {
            overflow: hidden; /* 隐藏溢出内容 */
            height: 0; /* 初始高度为0，确保面板开始时是折叠的 */
            transition: height 300ms ease-in-out; /* 平滑过渡效果 */
            font-size: 1.25rem;
          }
        }
      }
    }
  }

}

/* Styles for mobile phones */
@media screen and (max-width: 767px) {
  .section-faq-light {
    background-color: #fff;
    width: 100%;
    display: flex;
    justify-content: center;
    .container {
      width: 79%;
      //background-color: skyblue;
      height: 50%;
      display: flex;
      padding-bottom: 100px;
      flex-direction: column;

      .left {
        padding-top: 10px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        //background-color: salmon;
        .text-stroke {
          -webkit-text-stroke: 2px black; /* Safari 和 Chrome */
          color: transparent; /* 将文字颜色设置为透明，以使描边效果显现 */
          font-size: 1.55rem;
        }
        span {
          font-size: 2.25rem;
        }
        p {
          margin-top: 20px;
          font-size: 1.25rem;
          color: #444444;
          width: 70%;
        }
      }
      .right {
        padding-top: 50px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .accordion {
          width: 100%;
          border-bottom: 1px solid #000000;
          height: 100px;
          margin: 10px 0;
          .btn {
            width: 100%;
            color: #000000;
            display: flex;
            background: none; /* 移除默认的背景 */
            border: none; /* 移除边框 */
            padding: 0; /* 移除内边距 */
            margin:  0;
            font: inherit; /* 使用继承的字体样式 */
            cursor: pointer; /* 保持指针样式为手形光标 */
            outline: inherit; /* 在聚焦时使用继承的轮廓样式 */
            img {
              height: 75px;
              width: 75px;
            }
            span {
              font-size: 1.25rem;
              font-weight: bold;
              width: 94%;
              height: 75px;
              display: flex;
              align-items: center;
              margin-left: 20px;
            }
            svg {
              height: 75px;
              display: flex;
              align-items: center;
            }
          }
          .content {
            overflow: hidden; /* 隐藏溢出内容 */
            height: 0; /* 初始高度为0，确保面板开始时是折叠的 */
            transition: height 300ms ease-in-out; /* 平滑过渡效果 */
            font-size: 1.25rem;
          }
        }
      }
    }
  }

}


a {
  text-decoration: none;
}

</style>
