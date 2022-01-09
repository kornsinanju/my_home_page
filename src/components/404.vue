<template>
    <div className="w-full z-20 items-center text-gray-700 bg-gray-50 min-h-screen flex lg:flex-row flex-col py-36">
        <!-- <div className="fixed top-0 h-full      bg-right-top z-0 bg-cover bg-no-repeat w-full"></div> -->
        <!-- <section class="bg-gray-50 w-full min-h-screen pt-60">
            <div className="absolute pt-28 w-full flex flex-col items-center justify-center">
                <h2 className="text-4xl font-bold pb-5 cursor-pointer" @click="gotoContact('https://github.com/kornsinanju/clone_agario')">Agar IO Clone</h2>
                <p className="text-xl font-sans px-10 2xl:text-3xl xl:text-2xl">
                Agar.io clone project to practice real-time communication by applying websocket using Vue.JS, CanvasJS, MongoDB, and Flask :) 
                </p>
            </div>
        </section> -->
        <div className="lg:w-1/2 w-full text-left sm:pl-10 lg:pl-12 xl:pl-20 px-3 lg:mb-5 mb-20">
            <h2 className="font-bold 3xl:text-9xl xl:text-8xl text-7xl text-purple-500">Whoops!</h2>
            <p className="font-bold 3xl:text-8xl xl:text-7xl text-6xl pt-3">We can't find that page... </p>
            <p className="font-semi 3xl:text-5xl xl:text-4xl text-3xl pt-10" >No worry. You can head over to our homepage
                <span className="hover:uppercase underline cursor-pointer " @click="gotoContact('https://kornsinanju.github.io/home')">here</span> 
            </p>
        </div>
        <div className="lg:w-1/2 w-full xl:px-10 px-3 min-h-max">
            <iframe src="https://giphy.com/embed/3ohhwEVKBOZd7bCQ7u" style="width:100%;height:60vh;" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            <p><a href="https://giphy.com/stickers/wetransfer-sticker-3ohhwEVKBOZd7bCQ7u" className="font-bold">via GIPHY</a></p>
        </div>
    </div>
    
</template>

<script>
export default {
  methods:{
    gotoContact(e) {
      window.open(e);
    },
  }
};
</script>