<template>
    <div className="w-full h-full flex flex-col justify-start items-center bg-gray-200 z-20">
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