<script setup lang="ts">
import {nextTick, ref, watch} from "vue";
import anime from 'animejs';


const activeIndex = ref<any>(null);
const contentRefs = ref([]);


const toggles = [
  { title: "概念难以理解?",
    content: "寻找不同的解释和教材。有时候，换一种解释方式就能豁然开朗。在线课程、视频教程、或者问答社区如Stack Overflow都是不错的资源。"
  },{
    title: "缺乏实践?",
    content: "理论学习后应立即实践。可以通过做小项目、解决编程挑战或贡献开源项目来增强实践经验。"
  },{
    title: "学习路径不清晰?",
    content: "制定学习计划。确定自己的学习目标，然后选择适合这些目标的资源。跟随在线课程或教程通常能提供较为清晰的路径。"
  },{
    title: "缺乏动力?",
    content: "设定小目标和奖励。将大目标拆分为小目标，每达成一个小目标就给自己一些奖励。另外，和朋友一起学习也能提高动力。"
  },
  {
    title: "时间管理困难?",
    content: "使用时间管理工具，如番茄钟，或者制定固定的学习时间表。将学习时间安排得像日常活动一样固定，有助于形成习惯。"
  },
  {
    title: "信息过载?",
    content: "专注于基础。学习编程时，有无穷无尽的资源和新技术。先掌握基础知识，再逐步深入，避免一开始就涉足太广。"
  },
  {
    title: "害怕失败?",
    content: "接受错误作为学习的一部分。编程中遇到错误是正常的，每次调试错误都是学习和成长的机会。"
  },
  {
    title: "挫败感?" ,
    content: "看到别人似乎学得更快或更成功时感到沮丧。应该专注于个人进步而非比较。每个人的学习路径和速度都是不同的。记住，编程是一项复杂的技能，需要时间来掌握。"
  },
  {
    title: "编程习惯不佳?",
    content: "学习和实践良好的编程习惯。阅读和遵循编码规范，写清晰的代码注释，使用版本控制系统，都是发展良好习惯的重要方面。."
  },
  {
    title: "过度使用复制粘贴?",
    content: "依赖网络上的解决方案而不是自己解决问题，会阻碍深入学习和理解。尽量自己解决问题。在复制粘贴前，先尝试理解问题的本质，独立寻找解决方案。这样做可以加深理解并提高解决问题的能力。"
  }
]
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
  contentRefs.value.forEach((el: HTMLElement, index) => {
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
  <div class="section-faq-dark">
    <div class="container">
      <div class="left">
        <h2>
          <span class="text-stroke">常见</span>
          <br>
          <span>问题</span>
        </h2>
        <p>遇到挑战并不意味着你不适合编程。持之以恒，不断实践和学习，你将能够克服这些常见问题，继续在编程之路上前进。</p>
      </div>
      <div class="right">
        <div class="accordion" v-for="(item, index) in toggles" :key="index" :class="`accordion-${index}`">
          <button class="btn" @click="toggle(index)">
            <span>{{item.title}}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="#ffffff">
              <path d="M8.89863 0.55575L11.5297 0.555749L11.5297 17.815C13.0774 14.302 16.4824 11.8582 20.3517 11.7054L20.3517 14.3023C16.3276 14.9132 12.9227 17.6625 11.5297 21.481L8.89863 21.481C7.50568 17.6625 4.25553 14.9132 0.0766598 14.3023L0.0766597 11.7054C3.94598 11.8582 7.35091 14.302 8.89863 17.815L8.89863 0.55575Z"></path>
            </svg>
          </button>
          <div v-show="activeIndex === index" class="content" ref="contentRefs" :class="`contend-${index}`">
            <p style="color: #FFFFFF">{{item.content}}</p>
          </div>
        </div>
        <router-link to="/" class="btn-1">
          <span>向我提问!</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
/* Styles for PC */
@media screen and (min-width: 1024px) {
  .section-faq-dark {
    background-color: #161616FF;
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
          -webkit-text-stroke: 1px #FFFFFF; /* Safari 和 Chrome */
          color: transparent; /* 将文字颜色设置为透明，以使描边效果显现 */
          font-size: 2.25rem;
        }
        span {
          font-size: 2.25rem;
          color: #FFFFFF;
        }
        p {
          margin-top: 40px;
          font-size: 1.25rem;
          color: #FFFFFF;
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
          border-bottom: 1px solid #FFFFFF;
          height: 100px;
          .btn {
            width: 100%;
            color: #FFFFFF;
            display: flex;
            background: none; /* 移除默认的背景 */
            border: none; /* 移除边框 */
            padding: 0; /* 移除内边距 */
            margin: 10px 0;
            font: inherit; /* 使用继承的字体样式 */
            cursor: pointer; /* 保持指针样式为手形光标 */
            outline: inherit; /* 在聚焦时使用继承的轮廓样式 */
            span {
              font-size: 2rem;
              font-weight: bold;
              width: 94%;
              height: 75px;
              display: flex;
              align-items: center;
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
        .btn-1 {
          margin-top: 50px;
          width: 250px;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 2px solid #FFFFFF;
          background: linear-gradient(to right, #161616FF 0%, #161616FF 50%, #FFFFFF 50%, #FFFFFF 100%);
          background-size: 200% 100%; /* 两倍的宽度，用于实现从左到右的填充效果 */
          transition: background-position 0.2s; /* 过渡背景位置 */
          span {
            color: #FFFFFF;
            font-size: 1.25rem;
            font-weight: bold;
          }
        }
        .btn-1:hover {
          background-position: -100% 0;
          span {
            color: #000000;
          }
        }
      }
    }
  }

}

/* Styles for tablets */
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .section-faq-dark {
    background-color: #161616FF;
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
          -webkit-text-stroke: 1px #FFFFFF; /* Safari 和 Chrome */
          color: transparent; /* 将文字颜色设置为透明，以使描边效果显现 */
          font-size: 1.75rem;
        }
        span {
          font-size: 1.75rem;
          color: #FFFFFF;
        }
        p {
          margin-top: 40px;
          font-size: 1rem;
          color: #FFFFFF;
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
          border-bottom: 1px solid #FFFFFF;
          height: 100px;
          .btn {
            width: 100%;
            color: #FFFFFF;
            display: flex;
            background: none; /* 移除默认的背景 */
            border: none; /* 移除边框 */
            padding: 0; /* 移除内边距 */
            margin: 10px 0;
            font: inherit; /* 使用继承的字体样式 */
            cursor: pointer; /* 保持指针样式为手形光标 */
            outline: inherit; /* 在聚焦时使用继承的轮廓样式 */
            span {
              font-size: 1.55rem;
              font-weight: bold;
              width: 94%;
              height: 75px;
              display: flex;
              align-items: center;
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
        .btn-1 {
          margin-top: 50px;
          width: 250px;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 2px solid #FFFFFF;
          background: linear-gradient(to right, #161616FF 0%, #161616FF 50%, #FFFFFF 50%, #FFFFFF 100%);
          background-size: 200% 100%; /* 两倍的宽度，用于实现从左到右的填充效果 */
          transition: background-position 0.2s; /* 过渡背景位置 */
          span {
            color: #FFFFFF;
            font-size: 1.25rem;
            font-weight: bold;
          }
        }
        .btn-1:hover {
          background-position: -100% 0;
          span {
            color: #000000;
          }
        }
      }
    }
  }

}

/* Styles for mobile phones */
@media screen and (max-width: 767px) {
  .section-faq-dark {
    background-color: #161616FF;
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
        padding-top: 20px;
        width: 100%;
        height: 100%;
        //background-color: salmon;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .text-stroke {
          -webkit-text-stroke: 1px #FFFFFF; /* Safari 和 Chrome */
          color: transparent; /* 将文字颜色设置为透明，以使描边效果显现 */
          font-size: 1.55rem;
        }
        span {
          font-size: 2.25rem;
          color: #FFFFFF;
        }
        p {
          margin-top: 20px;
          font-size: 1.25rem;
          color: #FFFFFF;
          width: 70%;
        }
      }
      .right {
        padding-top: 80px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .accordion {
          width: 100%;
          border-bottom: 1px solid #FFFFFF;
          height: 100px;
          .btn {
            width: 100%;
            color: #FFFFFF;
            display: flex;
            background: none; /* 移除默认的背景 */
            border: none; /* 移除边框 */
            padding: 0; /* 移除内边距 */
            margin: 10px 0;
            font: inherit; /* 使用继承的字体样式 */
            cursor: pointer; /* 保持指针样式为手形光标 */
            outline: inherit; /* 在聚焦时使用继承的轮廓样式 */
            span {
              font-size: 1.25rem;
              font-weight: bold;
              width: 94%;
              height: 75px;
              display: flex;
              align-items: center;
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
        .btn-1 {
          margin-top: 50px;
          width: 250px;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 2px solid #FFFFFF;
          background: linear-gradient(to right, #161616FF 0%, #161616FF 50%, #FFFFFF 50%, #FFFFFF 100%);
          background-size: 200% 100%; /* 两倍的宽度，用于实现从左到右的填充效果 */
          transition: background-position 0.2s; /* 过渡背景位置 */
          span {
            color: #FFFFFF;
            font-size: 1.25rem;
            font-weight: bold;
          }
        }
        .btn-1:hover {
          background-position: -100% 0;
          span {
            color: #000000;
          }
        }
      }
    }
  }

}

</style>
