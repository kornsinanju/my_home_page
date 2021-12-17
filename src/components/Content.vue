<template>
  <!-- <Toggle :mode="mode" @toggle="$emit('toggle')"/> -->
  <!-- <div></div> -->
  <div v-if="count == 0" className="flex flex-col justify-start items-center bg-gray-50"> <Intro/> </div>
  <div v-else-if="count == 1">  <Projects/> </div>
  <div v-else className="flex flex-col justify-start items-center bg-gray-50"> <Blogs/> </div>
</template>

<script>
import Projects from './Projects.vue'
import Intro from './Intro.vue'
import Blogs from './Blogs.vue'
export default {
  props: ["count", "mode"],
  components: {
    Projects,
    Intro,
    Blogs
  },
  methods: {
    scrollToTop() {
        window.scrollTo(0,0);
    }
  },
  watch: {
    count : function(newVal,oldVal) {
      this.scrollToTop();
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
@import url("../styles/base.css");
@import url("../styles/basic-grid.css");
@import url("../styles/photo-grid.css");


section {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 400px;
  padding: 100px 20vw;
  /* margin-top: 0; */
  font-family: "Prompt",sans-serif;
  z-index: 20;
}

#lowpad{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 400px;
    padding: 10px 0vw;
    padding-top: 100px;
    /* margin-top: 0; */
    font-family: "Prompt",sans-serif;
    z-index: 20;
}

#grayon{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 200px;
    padding: 0vw;
    /* padding-top: 100px; */
    /* margin-top: 0; */
    font-family: "Prompt",sans-serif;
    z-index: 20;
    background: #202731;
}

.video {
    aspect-ratio: 16/9;
    /* margin-top: 5px; */
    padding-top: 10px;
}

.grayish {
  background: #202731;
}

.blue {
  background: #3c31dd;
}

.red {
  background: #dd3f31;
}

.pink {
  background: #ff0066;
  overflow: hidden;
}

.dark {
  background: #0f0f10;
}

.h2 {
   font-size: 4rem; 
}

.bubble::before{
  background-color: #0f0f10;
}

.bubble::after {
  content: "";
  border-top-left-radius: 50% 100%;
  border-top-right-radius: 50% 100%;
  position: absolute;
  bottom: 0;
  height: 85%;
  width: 100%;
  background-color: #0f0f10;
  z-index: -1;
}

.wbubble::before{
  --tw-bg-opacity: 1;
  background-color: rgba(249, 250, 251, var(--tw-bg-opacity));
}

.wbubble::after {
  content: "";
  border-top-left-radius: 50% 100%;
  border-top-right-radius: 50% 100%;
  position: absolute;
  bottom: 0;
  height: 85%;
  width: 100%;
  --tw-bg-opacity: 1;
  background-color: rgba(249, 250, 251, var(--tw-bg-opacity));
  z-index: -1;
}



.wave {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  z-index: 20;
}

.wave svg {
  position: relative;
  display: block;
  width: calc(123% + 1.3px);
  height: 175px;
  z-index: 20;
}

.wave .shape-fill {
  fill: #0f0f10;
}

.spacer {
  aspect-ratio: 960/280;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: 20;
}

.spacer2 {
  aspect-ratio: 960/200;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: 20;
}

.layer6 {
  background-image: url("../assets/bg-images/layer6.svg");
}

.layer5 {
  background-image: url("../assets/bg-images/layer5.svg");
}

.layer4 {
  background-image: url("../assets/bg-images/layer4.svg");
}

.layer3 {
  background-image: url("../assets/bg-images/layer3.svg");
}

.layer1 {
  background-image: url("../assets/bg-images/layer1.svg");
}

.layer2 {
  background-image: url("../assets/bg-images/layer2.svg");
}

.flip {
  transform: rotate(180deg);
}

.blob-motion {
  position: absolute;
  transform: translateY(-20%);
  z-index: 0;
}

.blob-content {
  z-index: 1;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 2.0s ease-out;

}

.fade-enter, .fade-leave-to {
  opacity: 0;

}
</style>