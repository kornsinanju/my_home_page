<template>
    <!-- <div className="fixed top-0 h-full bg-robot2 bg-right-top z-0 bg-cover bg-no-repeat w-full"></div> -->
    <div className="w-full flex flex-col items-start">
        <h2 className=" font-bold text-4xl px-5 md:px-44 pt-12 font-mono">Blogs</h2>
        <p className="text-gray-500 text-base px-5 md:px-44 pt-3 font-mono pb-5">Last Update : 16 Dec 2021</p>
        <div class="flex-grow align-center items-center w-full justify-center">
            <h2 className="text-4xl font-bold pt-40">Coming soon...</h2>
            <!-- <div>ddd</div> -->
        </div>
    </div>
    <div className="w-full flex flex-col items-start">
        
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
    </div>
</template>

<script>
// let recaptchaScript = document.createElement("script");
// recaptchaScript.setAttribute(
//     "src",
//     "https://cdn.jsdelivr.net/npm/kute.js@2.1.2/dist/kute.min.js"
// );
// document.head.appendChild(recaptchaScript);

export default {
//   mounted() {
//     const tween = KUTE.fromTo(
//           '#blob1',
//           {path:'#blob1'},
//           {path:'#blob2'},
//           {repeat:999,duration:3000,yoyo:true}
//         )
//       tween.start()
//   }
};
</script>