<script setup lang="ts">
import anime from "animejs";
import opentype from "opentype.js";
import {nextTick, onMounted, ref} from "vue";

const svgPaths = ref([]);
const fontSize = 120; // 字体大小
const spacing = 20; // 两个文本之间的间距
const texts = ['Welcome', 'To', 'My', "Website"]; // 要生成路径的文本数组
const y = 100; // 假设所有文本都在同一基线上
let x = 0; // 初始x坐标

const loadFontAndGeneratePath = () => {
  opentype.load('src/assets/font/AlimamaDongFangDaKai-Regular.ttf', (err, font) => {
    if (err) {
      console.error('Font could not be loaded:', err);
    } else {
      texts.forEach(text => {
        // 生成当前文本的路径
        const path = font.getPath(text, x, y, fontSize);
        svgPaths.value.push(path.toPathData())
        // 更新x坐标，为下一个文本计算位置
        x += font.getAdvanceWidth(text, fontSize, { kerning: true }) + spacing;
      })
      nextTick(()=> {
        animatePathDrawing();
      })
    }
  });
};
const animatePathDrawing = () => {
  anime({
    targets: '.line-drawing0, .line-drawing1, .line-drawing2, .line-drawing3',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 2500,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
  });
  anime({
    targets: '.btn-svg',
    translateY: 20,
    direction: 'alternate',
    loop: true,
    easing: 'linear'
  })
};


onMounted(() => {
  loadFontAndGeneratePath();
});

</script>

<template>
  <div class="section-banner">
    <div class="svg-container">
      <svg width="70%" height="50%">
        <g v-for="(pathData, index) in svgPaths" :key="index">
          <path :class="`line-drawing${index}`" :d="pathData" fill="none" stroke="#6B47B1FF" stroke-width="2"/>
        </g>
      </svg>
    </div>
    <div class="container">
      <h1>A Creative & Technology Company in Malaysia</h1>
      <p>We build innovative digital solutions for decade.</p>
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
      <button class="btn-svg">
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="#ffffff" class="w-[22px] h-[28px] md:h-[32px] lg:h-[36px] self-start animate-bounce">
          <path d="M8.89863 0.55575L11.5297 0.555749L11.5297 17.815C13.0774 14.302 16.4824 11.8582 20.3517 11.7054L20.3517 14.3023C16.3276 14.9132 12.9227 17.6625 11.5297 21.481L8.89863 21.481C7.50568 17.6625 4.25553 14.9132 0.0766598 14.3023L0.0766597 11.7054C3.94598 11.8582 7.35091 14.302 8.89863 17.815L8.89863 0.55575Z"></path>
        </svg>
      </button>
    </div>
  </div>

</template>

<style scoped lang="less">
.section-banner {
  height: 800px;
  .svg-container {
    background-color: #000000;
    z-index: -1;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 450px;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    font-size: 1.2rem;
    p {
      font-size: 1.5rem;
    }
    .btn-group {
      margin: 20px 0;
      height: 65px;
      width: 30%;
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
    .btn-svg {
      background-color: transparent;
      border: none;
      padding: 0;
      margin: 0;
      font: inherit;
      cursor: pointer;
      outline: none; /* 如果需要，可以移除按钮点击后的焦点样式 */
    }
  }
}

</style>
