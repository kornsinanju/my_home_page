<template>
    <div className="w-full min-h-max flex flex-col justify-start items-center bg-gray-200 z-20">
        <div className="w-full flex flex-col items-start bg-gray-200">
            <h2 className=" font-bold text-4xl px-5 md:px-44 pt-12 font-mono">Blogs</h2>
            <p className="text-gray-500 text-base px-5 md:px-44 pt-3 font-mono pb-5">Last Update : 16 Dec 2021</p>
        </div>
        <div className="w-full px-5 bg-gray-200" v-if="!loading">
            
            <div className="w-full flex flex-col items-start " id="lowpad">
                <div v-for="{title,content,createdAt,heartCount} in post" :key="title" className="px-5 p-5 border-4 w-5/6 bg-gray-50 rounded-lg border-gray-300 mb-5 cursor-pointer">
                    <router-link :to="`/blogs/${title}`">
                        <p className="text-2xl font-bold text-left">{{title}}</p>
                        <p className="pt-1 text-left">{{toNow(createdAt)}}</p>
                        <p className="pt-5 text-left">{{getWordInfo(content)}}</p>
                        <p className="text-right">💗 {{heartCount || 0}} Hearts</p>
                    </router-link>
                    <!-- <div v-html="markdownToHtml(content)"></div> -->
                </div>
            </div>
        </div>
        <div className="w-full bg-gray-200" v-else>
            <img src="/src/assets/spinner2.gif" alt="" className="mx-auto">
        </div>
    </div>
    <!-- <div className="fixed top-0 h-full bg-robot2 bg-right-top z-0 bg-cover bg-no-repeat w-full"></div> -->
    <!-- <div class="spacer layer1"></div> -->
    <div className="relative botton-0 left-0 z-50 pb-0 -mb-1 -mt-1 bg-gray-50">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" ><path fill="#e5e7eb" fill-opacity="1" d="M0,256L17.1,224C34.3,192,69,128,103,133.3C137.1,139,171,213,206,229.3C240,245,274,203,309,170.7C342.9,139,377,117,411,122.7C445.7,128,480,160,514,154.7C548.6,149,583,107,617,85.3C651.4,64,686,64,720,69.3C754.3,75,789,85,823,112C857.1,139,891,181,926,170.7C960,160,994,96,1029,101.3C1062.9,107,1097,181,1131,229.3C1165.7,277,1200,299,1234,266.7C1268.6,235,1303,149,1337,112C1371.4,75,1406,85,1423,90.7L1440,96L1440,0L1422.9,0C1405.7,0,1371,0,1337,0C1302.9,0,1269,0,1234,0C1200,0,1166,0,1131,0C1097.1,0,1063,0,1029,0C994.3,0,960,0,926,0C891.4,0,857,0,823,0C788.6,0,754,0,720,0C685.7,0,651,0,617,0C582.9,0,549,0,514,0C480,0,446,0,411,0C377.1,0,343,0,309,0C274.3,0,240,0,206,0C171.4,0,137,0,103,0C68.6,0,34,0,17,0L0,0Z"></path></svg>    
    </div> 
    <!-- <div className="w-full text-gray-50 min-h-fit bg-black" id="grayon">
        <h2 className="3xl:text-3xl text-2xl font-bold cursor-pointer pb-10 " @click="gotoContact('https://github.com/kornsinanju/my_blog_nextjs')">Join my blogs and add likes</h2>
    </div> -->
</template>

<script>
import { getMyPost } from '../firebase'

export default {
    data() {
        return {
        loading : true,
        post : {}
        }
    },
    methods: {
        toNow(time){
            return time.toDate().toDateString() 
        },
        getWordInfo(content){
            const wordCount = content.trim().split(/\s+/g).length;
            const minutesToRead = (wordCount / 100 + 1).toFixed(0);
            return wordCount + " words. " + minutesToRead + " min read"
        }
    },
    created() {
        getMyPost().then(
            posts => {
                console.log(posts)
                this.post = posts
                this.loading = false
                return this.post
            }
        )
    }
};
</script>