<script setup lang="ts">
import {nextTick, ref, watch} from "vue";
import anime from 'animejs';


const activeIndex = ref(null);
const contentRefs = ref([]);


const toggles = [
  { title: "What services do you offer?",
    content: "We offer a variety of services but our main areas of focus are web design and development, mobile applications, digital transformation consulting services and SEO. Some other services including content marketing, and branding & graphic design."
  },{
    title: "How much will a web design project cost?",
    content: "Our starting price for small and simple websites with 4-6 pages is approximately MYR 5,000. As the number of pages, features, and complexity of the website grows the range of pricing could be from MYR 10,000 to more than MYR 50,000."
  },{
    title: "How long will a web design project take?",
    content: "Typically our websites are completed within a timeframe of 4 to 12 weeks. However we ensure that we have the capacity, for projects before accepting them to ensure your project will never be placed in a waiting queue."
  },{
    title: "Do you offer e-commerce web design?",
    content: "Yes, we definitely offer e-commerce website design and development services. We also specialize in creating and refining websites on Shopify or WordPress with basic support of On-site SEO service."
  },
  {
    title: "How big is your team?",
    content: "We are a small but mighty team. Our team consists of 5 dedicated web designers (specializing in User Experience and User Interface) and 6 software developers. Our branding team consists of 2 members and the general team consists of 2."
  },
  {
    title: "Do you offer services out of Malaysia?",
    content: "Yes we do. Our team works around the clock to cater to our clients worldwide."
  },
  {
    title: "Do you offer SEO services?",
    content: "Yes, we offer a range of SEO packages designed to meet your needs. Our packages include strategies for both on page and off page optimization, such, as content creation optimizing your webpages building quality backlinks and more. Whether you prefer our packages or need a customized solution, our team is ready to assist you. Feel free to reach out to us today to discuss your requirements and begin enhancing your visibility."
  },
  {
    title: "I'm interested, what are my next steps?" ,
    content: "Contact us today and after a consultation, we will send you a detailed proposal within 24 hours! Let’s get started!"
  },
  {
    title: "What is an SEO agency?",
    content: "An SEO Agency is a company specializing in increasing organic search traffic for businesses. In theory, there are numerous methods to boost organic search traffic, requiring a range of skills from design to technical expertise.While many SEO agencies focus primarily on analytics, keywords, and providing reports, at Fuse, we have a team of web experts who specialize in Technical SEO, Keyword Research, UI/UX, Website Development, and Analytics. With our comprehensive expertise, we understand the best strategies to optimize your website effectively."
  },
  {
    title: "How to design a website?",
    content: "You can create a website using platforms like Wix, Squarespace, and Webflow. However, if you’re aiming to stand out from your competitors and establish a strong SEO strategy and digital presence, we recommend seeking out a professional to build or advise for your business. We are expert in this field ensuring that your investment does not go in vain."
  }
]
const toggle = (index) => {
  if (activeIndex.value === index) {
    activeIndex.value = null; // 如果点击的是已展开的面板，则折叠
  } else {
    activeIndex.value = index; // 展开新的面板
  }
};
// 监听activeIndex的变化来执行动画
watch(activeIndex, async (newIndex, oldIndex) => {
  await nextTick(); // 确保DOM更新
  contentRefs.value.forEach((el, index) => {
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
          <span class="text-stroke">Frequently</span>
          <br>
          <span>Asked Questions?</span>
        </h2>
        <p>Got Questions?</p>
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
          <span>Ask Me!</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
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
</style>
