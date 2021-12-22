<template>
    <div className="w-full flex flex-col justify-start items-center bg-gray-50 z-20">
        <!-- <div className="fixed top-0 h-full      bg-right-top z-0 bg-cover bg-no-repeat w-full"></div> -->
        <div className="w-full flex flex-col items-start bg-gray-900 text-gray-50 z-20">
            <div className="bg-gray-900 z-20 w-full flex flex-col items-start">
                <h2 className=" font-bold text-4xl px-5 md:px-44 pt-12 font-mono">Projects</h2>
                <p className="text-gray-500 text-base px-5 md:px-44 pt-3 font-mono pb-5">Last Update : 18 Sep 2021</p>
            </div>
            <div className="bg-gray-900 w-full" id="lowpad">
                <div className="w-full flex flex-row justify-around h-60">
                    <div className="w-full xl:w-1/2 md:px-20 px-1 flex flex-col items-center justify-center">
                        <div class="cursor-pointer pb-5 flex flex-row">
                            <h2 className="3xl:text-5xl text-4xl  font-bold " @click="gotoContact('https://reviewright.study')">ReviewRight</h2>
                            <img src="../assets/cards.png" alt="ReviewRight Logo" className="w-10 h-10">
                            <!-- <img src="../assets/favicon.ico" alt="" className="w-10 h-10"> -->
                        </div>
                        
                        <p className="text-xl font-sans 2xl:text-3xl xl:text-2xl">
                            A flashcard education platform build for university and highschool students for intensive memory lessons. 
                        </p>
                    </div>
                    <div className="w-0 max-w-2xl xl:w-1/2 px-0 2xl:px-40 xl:px-20">
                        <!-- <iframe className="w-full h-full" src="https://reviewright.study/" title="ReviewRight" ></iframe> -->
                        <img src="../assets/ReviewRight.png" alt="ReviewRight" @click="gotoContact('https://reviewright.study')" className="w-full rounded-lg shadow-lg hover:shadow-2xl cursor-pointer transition duration-500 ease-in-out transform hover:scale-110"> 
                    </div>
                </div>
                
                
            </div>
            <section className="bg-fixed bg-no-repeat bg-cover bg-robot">
                <h2 className="3xl:text-5xl text-4xl font-bold pb-5 cursor-pointer" @click="gotoContact('https://github.com/kornsinanju/IDC_2021_G3')">Flying Toilet 🤖</h2>
                <p className="font-sans hover:bg-gray-800 hover:bg-opacity-40 2xl:text-3xl xl:text-2xl"> 
                    A winning robot project for International Design Contest Robocon 2021 among all 83 representative students from university all over the world!
                    <br> Using C# and Inventor to create.
                </p>
            </section>
            
            
            <section class="red">
            <h2 className="3xl:text-5xl text-4xl  font-bold pb-5 pt-16">Go Salmon Go!</h2>
            <p className="text-xl font-sans 2xl:text-3xl xl:text-2xl">
                Inspired by Candy Crush and Plumber, we created a puzzle game where players have to move the river to make way for the fish!
                    The game is implemented in Python using Pygame during 1 day hackathon by Digital Creators Club (Trap)
            </p>
            <div className="pt-10">
                <iframe style="width:100%;height:100%;" src="https://www.youtube.com/embed/H0wEopkBiW8" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            </section>
            <div class="spacer layer1"></div>
            <div className="w-full " id="grayon">
                
                <div className="w-full flex flex-row justify-around h-64 pt-16 pb-16">
                    
                    
                    <div className="w-0 max-w-3xl xl:w-1/2 px-0 2xl:px-40 xl:px-20 z-20">
                        <!-- <iframe className="w-full h-full" src="https://reviewright.study/" title="ReviewRight" ></iframe> -->
                        <img src="../assets/my_blog_next.png" alt="ReditClone" @click="gotoContact('https://github.com/kornsinanju/my_blog_nextjs')" className="w-full rounded-lg shadow-lg hover:shadow-2xl cursor-pointer transition duration-500 ease-in-out transform hover:scale-110"> 
                    </div>
                    <div className="w-full xl:w-1/2 md:px-20 px-1 flex flex-col items-center justify-center">
                        <div class="pb-5 flex flex-row">
                            <h2 className="3xl:text-5xl text-4xl font-bold cursor-pointer" @click="gotoContact('https://github.com/kornsinanju/my_blog_nextjs')">Redit Clone</h2>
                        </div>
                        
                        <p className="text-base font-sans 2xl:text-2xl xl:text-xl">
                            A personal project to create a Redit clone blog using server-side rendering from nextjs and firebase as its database.
                        </p>
                    </div>
                </div>
            </div>
            <div class="spacer layer2 flip -my-0.5 -mt-5 z-0"></div>
            <section class="pink w-full">
                <div className="absolute pt-28 w-full flex flex-col items-center justify-center">
                    <h2 className="text-4xl font-bold pb-5 cursor-pointer" @click="gotoContact('https://github.com/kornsinanju/clone_agario')">Agar IO Clone</h2>
                    <p className="text-xl font-sans px-10 2xl:text-3xl xl:text-2xl">
                    Creating Agar.io clone using Vue.JS, Canvas and Flask :) 
                    </p>
                </div>
            <svg
                id="visual"
                viewBox="0 0 960 300"
                width="1000%"
                height="300"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
            >
                <g transform="translate(461.7536129145143 156.17096224429446)">
                <path
                    id="blob1"
                    d="M63.7 -70.9C88 -55.6 116.9 -40.6 121.6 -20.5C126.3 -0.3 106.9 25.1 87.8 43.8C68.8 62.5 50.1 74.5 28.6 85.2C7.1 95.8 -17.3 105.2 -38.7 100.2C-60.1 95.1 -78.6 75.5 -83.9 54.3C-89.3 33 -81.6 10 -81.5 -18.5C-81.4 -47 -88.9 -80.9 -76.6 -98.4C-64.3 -115.9 -32.1 -117 -6.2 -109.6C19.7 -102.2 39.4 -86.3 63.7 -70.9"
                    fill="#BB004B"
                ></path>
                </g>
                <g
                transform="translate(486.7864384612594 139.839597007338)"
                style="visibility: hidden"
                >
                <path
                    id="blob2"
                    d="M65.3 -78.3C78.8 -66.5 79.8 -40.4 87.3 -13.1C94.8 14.2 108.9 42.6 102.3 63.9C95.8 85.2 68.6 99.5 41.9 104.7C15.2 109.9 -11.1 106.2 -28.8 93.5C-46.5 80.8 -55.7 59.1 -74.1 37.7C-92.5 16.3 -120.1 -4.9 -117.4 -20.8C-114.8 -36.8 -81.8 -47.5 -57.2 -57.3C-32.6 -67.1 -16.3 -76.1 4.8 -81.8C25.9 -87.6 51.9 -90.1 65.3 -78.3"
                    fill="#BB004B"
                ></path>
                </g>
            </svg>
            </section>
        </div>
    </div>
    
</template>

<script>
export default {
    
  mounted() {
    const tween = KUTE.fromTo(
          '#blob1',
          {path:'#blob1'},
          {path:'#blob2'},
          {repeat:999,duration:3000,yoyo:true}
        )
      tween.start()
  },
  methods:{
    gotoContact(e) {
      window.open(e);
    },
  }
};
</script>