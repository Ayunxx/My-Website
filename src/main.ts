import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
import anime from "animejs";

const app = createApp(App)
app.use(router);
app.mount('#app');

const updateProgressBar = (percentage)=> {
    window.scrollTo(0,0);
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
        progressBar.style.width = `${percentage}%`;
    }
}

//使用setTimeout来模拟加载进度
let progress = 0;
const animation =  () => {
    anime({
        targets: '.screen-dark, #animation-container',
        easing: "easeInOutQuad",
        height: '100vh',
        opacity: '1',
        duration: 1000,
        direction: 'normal',
        complete: () => {
            const vueDom = document.getElementById("app");
            vueDom.style.opacity = 1;
            document.getElementById('animation-container').style.display = 'none';
            document.body.style.backgroundColor = '#000000';
        }
    });
    // anime({
    //     targets: '.screen-light',
    //     easing: "easeInOutQuad",
    //     top: '100%',
    //     duration: 1000,
    //     direction: 'normal',
    //     complete: () => {
    //
    //     }
    // });
}



const interval = setInterval(() => {
    progress += 10;
    updateProgressBar(progress);
    if (progress >= 100) {
        clearInterval(interval);
        // 加载完成后隐藏进度条
        document.getElementById('progress-bar-container').style.display = 'none';
        animation()


    }
}, 200);

