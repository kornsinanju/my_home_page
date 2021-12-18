<template>
    <div className="w-full flex flex-col items-start">
        <h2 className=" font-bold text-4xl px-5 md:px-44 pt-12 font-mono">About me</h2>
        <p className="text-gray-500 text-base px-5 md:px-44 pt-3 font-mono pb-5">Last Update : 16 Dec 2021</p>
    </div>
    <div className="flex flex-col-reverse 2xl:flex-row justify-evenly w-full pt-16 2xl:pt-32 items-center lg:pb-20">
        <!-- <div></div> -->
        <div class="flex flex-row pt-40 2xl:pt-20 pl-20 items-start">
            <div className="flex flex-col justify-start ">
                <h2 className="font-bold text-4xl lg:text-5xl 2xl:text-8xl animate-bounce">Hi there</h2>
                <p className="font-medium text-3xl xl:text-4xl 2xl:text-5xl pt-5">I'm Korn</p>
                <div>
                    <ul className="py-2 text-xl">
                        <li>I like make things and meeting new people</li>
                        <!-- <li>Leadership awarded students (selected 8 among all undergrads)</li> -->
                        <li>Tech Savvy, Fullstack Web Dev, Robotic Engineer</li>
                    </ul>
                </div>
            </div>
            <div className="w-32">
                <img src="../assets/giphy.gif" alt="hooray" className="w-32 h-32 pl-5 animate-bounce">
            </div>       
        </div>
        <div className="w-2/5 flex justify-center flex-row">
            <img src="../assets/me2.jpeg" alt="me_full" className="rounded-lg relative left-5 top-32 w-40 z-20 h-40 2xl:w-60 2xl:h-60 shadow-xl transition duration-500 ease-in-out transform hover:shadow-2xl hover:scale-110 ">
            <img src="../assets/me3.jpg" alt="me_full2" className="rounded-lg relative right-5 w-44 h-52 2xl:w-64 2xl:h-80 shadow-xl transition duration-500 ease-in-out transform hover:shadow-2xl hover:scale-110">
        </div>
    </div>
    <div class="spacer2 layer3 pb-0"></div>
    <div className="text-gray-50 bg-gray-800 flex flex-row justify-start w-full -mt-1">
        <h2 className="font-bold text-3xl px-5 md:px-20 lg:px-44 pt-12 font-mono">Skills</h2>
    </div>
    <div className="text-gray-50 bg-gray-800 grid grid-flow-col grid-cols-2 md:grid-cols-3 grid-rows-5 md:grid-rows-3 gap-4 w-full pt-10 font-semibold text-xl font-mono md:place-items-start px-10 -mb-1 -mt-1">
        <div className="py-5 md:pl-5 cursor-pointer" data-aos="fade-up">💻 Full-stack Web</div>
        <div className="py-5 md:pl-5 cursor-pointer" data-aos="fade-up">📖 SQL</div>
        <div className="py-5 md:pl-5 cursor-pointer" data-aos="fade-up">🕸️ React, NextJS, VueJS</div>
        <div className="py-5 md:pl-5 cursor-pointer" data-aos="fade-up">🤖 Mechnical Design</div>
        <div className="py-5 md:pl-5 cursor-pointer" data-aos="fade-up">🎹 Python, C++, JS</div>
        <div className="py-5 md:pl-5 cursor-pointer" data-aos="fade-up">👀 Computer Vision</div>
        <div className="py-5 md:pl-5 cursor-pointer" data-aos="fade-up">👓 Data Visualization</div>
        <div className="py-5 md:pl-5 cursor-pointer" data-aos="fade-up">🧠 Machine Learning</div>
        <div className="py-5 md:pl-5 cursor-pointer" data-aos="fade-up">👨‍🎨 Data Analysis</div>
    </div>
    <div class="spacer2 layer4 pb-0.5"></div>
    <div className="flex flex-row justify-start w-full pb-16 bg-yellow-50">
        
        <h2 className="font-bold text-3xl px-5 md:px-44 pt-12 font-mono">Journey</h2>
        
    </div>
    <div className="flex flex-row pt-10 w-full h-auto justify-around bg-yellow-50 px-10 -mb-1 z-30">
          <div className="flex flex-col w-2/5 items-center">
            <div className="min-w-min flex flex-col border-4 border-fuchsia-600 h-auto w-2/3 bg-gray-50 rounded-2xl shadow-lg lg:px-10 px-5 py-10 justify-start" data-aos="flip-right">
              <div className="flex flex-rol justify-start items-center pr-5">
                <h2 className="font-bold text-base md:text-lg lg:text-2xl inline pr-1">Tokyo Institute of Technology </h2>
                <img src="../assets/titech.png" alt="bachelor" className="inline w-10 h-10">
              </div>
              <!-- <div className="flex"></div> -->
              <div className="flex flex-col font-mono text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-lg justify-start items-start pt-5">
                <p className="text-left italic">Bachalor : System and Control Eng. (Class of 2022)</p>
                <ul className="list-disc text-left pt-5">
                  <li className="pb-2">GPA : 3.72/4.0 </li>
                  <!-- <li className="pb-2">University's Leadership Award</li> -->
                  <li className="hidden md:list-item">Hatanaka Lab : Developed ice hockey defensive strategy generating algorithm with captain of Japanese olympic ice hockey team</li>
                </ul> 
              </div>
            </div>
            <div className="min-w-min flex flex-col border-4 border-fuchsia-600 h-auto w-2/3 bg-gray-50 rounded-2xl shadow-lg lg:px-10 px-5 py-10 justify-start mt-40" data-aos="flip-right">
              <div className="flex flex-rol justify-start items-center ">
                <h2 className="font-bold text-base md:text-lg lg:text-2xl inline pr-1">Thai Students' Association in Japan Under Royal Patronage</h2>
                <img src="../assets/thai2.gif" alt="bachelor" className="inline w-10 h-10 mr-5">
              </div>
              <!-- <div className="flex"></div> -->
              <div className="flex flex-col font-mono text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-lg justify-start items-start ">
                <p className="text-left pt-5 italic">Head of Project Evaluation and Quality Control <br> 04/2020 - 03/2021</p>
                <ul className="list-disc text-left pt-5">
                  <li className="pb-2">Management</li>
                  <li className="">Optimize evaluation protocol</li>
                  <!-- <li className="">Hatanaka Lab : Developed the world first ice hockey defensive strategy generating algorithm using Coverage Control and Control Barrier algorithm with a Japanese Olympic Ice Hockey player</li> -->
                </ul> 
              </div>
            </div>
          </div>
          <div className="h-auto w-5 mx-7">

          </div>
          <div className="h-96 w-3 md:w-5 mb-20 mt-48 absolute bg-gray-800  z-30">
            <!-- <div className=""></div> -->
            <div className="h-96 w-3 md:w-5 mb-20 mt-60 absolute bg-gray-800  z-30">
            <!-- <div className=""></div> -->
              <div className="h-96 w-3 md:w-5 mb-20 mt-56 absolute bg-gray-800  z-30">
                <!-- <div className="h-12 w-3 md:w-5 mb-20 mt-48 absolute bg-gray-800 "> -->
                <!-- </div> -->
              </div>
            </div>
          </div>
          
          <div className="w-10 h-10 md:w-16 md:h-16 bg-gray-800 absolute mt-44 rounded-full z-30">
            <div className="w-10 h-10 md:w-16 md:h-16 bg-gray-800 absolute mt-52 rounded-full  z-30">
              <div className="w-10 h-10 md:w-16 md:h-16 bg-gray-800 absolute mt-96 rounded-full  z-30">
                <div className="w-10 h-10 md:w-16 md:h-16 bg-gray-800 absolute mt-60 rounded-full  z-30"></div>
              </div>
            </div>
          </div>
          <!-- <div className="w-16 h-16 bg-gray-800 absolute mt-96 rounded-full ">
            
          </div> -->
          
          <div className="flex flex-col w-2/5 items-center">
            <div className="min-w-min flex flex-col border-4 border-fuchsia-600 h-auto w-2/3 bg-gray-50 rounded-2xl shadow-lg lg:px-10 px-5 py-10 justify-start mt-64" data-aos="flip-left">
              <div className="flex flex-rol justify-center items-center">
                <h2 className="font-bold text-base md:text-lg lg:text-2xl inline pr-1">Robotic Club</h2>
                <img src="../assets/robot_club.gif" alt="bachelor" className="inline w-10 h-10">
              </div>
              
              <!-- <div className="flex"></div> -->
              <div className="flex flex-col font-mono text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-lg justify-start items-start">
                <p className="text-left pt-5 italic">Software Eng. 05/2019 - 12/2020</p>
                <ul className="list-disc text-left pt-5">
                  <li className="pb-2">Program robot, Control theory</li>
                  <li className="">Developed real-time data visualization as testing SW tool </li>
                  <!-- <li className="">Hatanaka Lab : Developed the world first ice hockey defensive strategy generating algorithm using Coverage Control and Control Barrier algorithm with a Japanese Olympic Ice Hockey player</li> -->
                </ul> 
              </div>
            </div>
            <div className="min-w-min flex flex-col border-4 border-fuchsia-600 h-auto w-2/3 bg-gray-50 rounded-2xl shadow-lg lg:px-10 px-5 py-10 justify-start mt-64" data-aos="flip-left">
              <div className="flex flex-rol justify-start items-center">
                <h2 className="font-bold text-base md:text-lg lg:text-2xl inline pr-1">HG Robotics</h2>
                <img src="../assets/gundam.gif" alt="bachelor" className="inline w-10 h-10">
              </div>
              <!-- <div className="flex"></div> -->
              <div className="flex flex-col font-mono text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-lg justify-start items-start">
                <p className="text-left italic">Software Development Eng. <br> 02/2021 - 03/2021</p>
                <ul className="list-disc text-left pt-5">
                  <li className="pb-2">Computer Vision </li>
                  <li className="">Software Optimization</li>
                  <!-- <li className="">Hatanaka Lab : Developed the world first ice hockey defensive strategy generating algorithm using Coverage Control and Control Barrier algorithm with a Japanese Olympic Ice Hockey player</li> -->
                </ul> 
              </div>
            </div>
          </div>
    </div>
    <div class="spacer2 layer5 -mb-1"></div>
    <div className="flex flex-row justify-start w-full pb-10 bg-gray-800 -mt-1 -mb-1">
        <h2 className="font-bold text-3xl px-5 md:px-44 pt-12 font-mono text-gray-50">Achievement</h2>
    </div>
    <div className="w-full font-semibold text-gray-50 bg-gray-800 text-lg font-mono place-items-start px-auto pl-10 md:pl-40 pr-20 pb-16 border-b-2 border-fuchsia-600 flex flex-col justify-start">
      <ul className="list-disc text-left">
        <li className="pb-2">1st place in International Design Contest Robocon 2021 🥇</li>
        <li className="pb-2">2nd place in Tokyo Tech's Creative Design Competition 2018 🥈</li>
        <li className="pb-2">Bronze modal in Thailand Olympiad in Informatic 2016 🥉</li>
      </ul>
    </div>
    <div className="flex flex-row justify-start w-full pb-10 bg-white">
        <h2 className="font-bold text-3xl px-5 md:px-44 pt-12 font-mono">Certificates</h2>
    </div>
    <div className="w-full font-semibold text-lg font-mono place-items-start px-auto md:pl-40 pr-20 pb-16 border-b-2 border-fuchsia-600 flex flex-col justify-start bg-white">
      <img src="../assets/certificates.png" alt="">
    </div>
    <div className="text-gray-50 bg-gray-800 flex flex-row justify-start w-full pb-10 -mb-1">
        <h2 className="font-bold text-3xl px-5 md:px-44 pt-12 font-mono">Hobby</h2>
    </div>
    <div className="text-gray-50 bg-gray-800 w-full font-semibold text-lg font-mono place-items-start px-auto pl-5 md:pl-40 pr-20 pb-16 grid md:grid-cols-4 grid-cols-2 justify-around">
      <p>Novel</p>
      <p>Reading</p>
      <p>Oil Paintings</p> 
      <p>Social Development</p> 
    </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
  created() {
    AOS.init({
  duration: 1200,
})
  }
};
</script>