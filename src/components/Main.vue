<script setup>
// import Content from './Content.vue'
import { ref } from 'vue'

defineProps({
  msg: String
})

// const count = ref(0)

</script>

<template>
  <div id="app">
    <div className="flex flex-row h-screen z-10">
      <div className="fixed right-2 top-8 w-20 h-20 md:hidden z-50 px-auto">
        <img src="https://img.icons8.com/material-rounded/48/ffffff/menu--v1.png" className="cursor-pointer transition duration-400 ease-in-out transform hover:scale-110" @click="toggleFunc" v-if="this.mode=='dark'"/>
        <img src="https://img.icons8.com/material-rounded/48/000000/menu--v1.png" className="cursor-pointer transition duration-400 ease-in-out transform hover:scale-110" @click="toggleFunc" v-else/>

      </div>
      <div className="fixed right-5 top-5 w-52 h-80 z-40 px-auto md:hidden " v-if="toggle">
        <!-- <div className="rounded-2xl w-30 h-full bg-gray-100 shadow-lg" data-aos="fade-left">
          <div className="overflow-hidden border-gray-400">
            <p className="border-b-2 py-8 pt-20 cursor-pointer transition duration-400 ease-in-out transform hover:scale-110 hover:font-bold" @click="toggleFunc2(0)">About me</p>
            <p className="border-b-2 py-8 cursor-pointer transition duration-400 ease-in-out transform hover:scale-110 hover:font-bold" @click="toggleFunc2(1)">Projects</p>
            <p className="py-8 cursor-pointer transition duration-400 ease-in-out transform hover:scale-110 hover:font-bold" @click="toggleFunc2(2)">Blogs</p>
          </div>
        </div> -->
        <div className="rounded-2xl w-30 h-full bg-gray-100 shadow-lg" data-aos="fade-left">
          <div className="overflow-hidden border-gray-400">
            <p className="border-b-2 py-8 pt-20 cursor-pointer transition duration-400 ease-in-out transform hover:scale-110 hover:font-bold" @click="$router.push('/home')">About me</p>
            <p className="border-b-2 py-8 cursor-pointer transition duration-400 ease-in-out transform hover:scale-110 hover:font-bold" @click="$router.push('/projects')">Projects</p>
            <p className="py-8 cursor-pointer transition duration-400 ease-in-out transform hover:scale-110 hover:font-bold" @click="$router.push('/blogs')">Blogs</p>
          </div>
        </div>
        <p>check</p>
      </div>

      <div className="hidden md:flex md:w-2/7 h-full text-gray-50 " >

        <div className="fixed h-full w-2/7 flex flex-col justify-end md:px-20 px-5 bg-forest">
          
          <div className="py-3 flex flex-col items-center">
            <img src="../assets/me.png" alt="my profile image" className="rounded-full w-3/7 shadow-lg">
          </div>
          
          <div className="py-2 text-gray-50 flex flex-col ">
            
              <p className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-lg font-bold text-md pl-0 pb-3">Journal</p>
              <!-- <p>A stunning personal blog of Kornvik Tanpiat (Korn)</p> -->
              <p className="2xl:text-3xl xl:text-2xl lg:text-xl md:text-base text-sm pl-0 pb-3">Welcome to my blog!</p>
          </div>
          <div className="py-5 flex items-start flex-col xl:text-2xl lg:text-lg md:text-md text-base">
              <!-- <p className="py-1 cursor-pointer" @click="count=0">About me</p>
              <p className="py-1 cursor-pointer" @click="count=1">Projects</p>
              <p className="py-1 cursor-pointer" @click="count=2">Blogs</p> -->
              <router-link to="/home" className="py-1 cursor-pointer" >About Me</router-link> 
              <router-link to="/projects" className="py-1 cursor-pointer" >Projects</router-link>
              <router-link to="/blogs" className="py-1 cursor-pointer" >Blogs</router-link>
          </div>
          <div class="flex py-1 justify-evenly pb-10 pt-5">
            <img src="../assets/linkedin_icon.png" alt="my profile image" className="h-6 w-6 cursor-pointer" @click="gotoContact('https://www.linkedin.com/in/kornvik-tanpipat')">
            <img src="../assets/instra_icon.png" alt="my profile image" className="h-6 w-6 cursor-pointer" @click="gotoContact('https://www.instagram.com/kornravik/')">
            <img src="../assets/facebook_icon.png" alt="my profile image" className="h-6 w-6 cursor-pointer" @click="gotoContact('https://www.facebook.com/kornvik.tanpipat')">
          </div>
          <p className="text-sm pb-2">© 2021 Kornvik Tanpipat. All rights reserved.</p> 
        </div>
          
          <!-- <img alt="Vue logo" src="../assets/logo.png" class="mx-auto"/> -->
          <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
      </div>
      <div :class="(mode=='light') ? 'bg-gray-50 w-full md:w-5/7 z-20' : 'bg-gray-800 w-full md:w-5/7 z-20'" @click="offFunc">
          <router-view />
      </div>
    </div>
  </div>
  
</template>

<style scoped>

</style>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
  name: "app",
  data() {
    return {
      mode : 'light',
      count : 0,
      toggle : false
    }
  },
  methods: {
    toggleFunc() {
      console.log(this.toggle)
      this.toggle = !this.toggle;
      if(this.toggle==true){
        this.mode = 'light'
      } else{
        if(this.$route.path=='/projects'){
          this.mode = 'dark'
        }
      }
    },
    offFunc(){
      this.toggle = false;
      if(this.$route.path=='/projects'){
        this.mode = 'dark'
      }
    }
  },
  watch: {
    count : function(val) {
      // console.log(val);
    },
    $route (to, from){
        // console.log(to)
        if(to.path == '/projects'){
          this.mode = 'dark'
        } 
        else{
          this.mode = 'light'
        }
        // console.log(this.mode)
    }

  },
  created() {
    AOS.init({
      duration: 1200,
    })
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
