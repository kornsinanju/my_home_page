
<template>

  <div className="w-full h-full flex flex-col justify-start items-center bg-gray-200 z-20">
        <div className="w-full flex flex-col items-start bg-gray-200">
            <h2 className=" font-bold text-4xl px-5 md:px-44 pt-12 font-mono">Blogs</h2>
            <p className="text-gray-500 text-base px-5 md:px-44 pt-3 font-mono pb-5">Last Update : 16 Dec 2021</p>
        </div>
        <div className="w-full px-5 bg-gray-200" v-if="!loading">
            
            <div className="mx-5 mt-5 rounded-lg border-gray-300 border-4 bg-gray-100 py-5 px-5 text-left mb-10">
                <p className="font-bold 2xl:text-6xl lg:text-4xl md:text-3xl text-xl mb-4">{{post.title}}</p>
                <span className="text-left lg:text-xl md:text-lg text-base">{{toNow()}}</span>
                <span className="pl-5">💗 {{post.heartCount || 0}} Hearts</span>
                <div v-html="markdownToHtml()" className="mt-8 markdown" ></div>
            </div>
        </div>
        <div className="w-full bg-gray-200" v-else>
            <img src="/src/assets/spinner2.gif" alt="" className="mx-auto">
        </div>
    </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getPostByName } from '../firebase'
import {marked} from "marked";

export default {
    data() {
        return {
        loading : true,
        post : {}
        }
    },
    methods: {
        markdownToHtml(){
            return marked(this.post.content);
        },
        toNow(){
            return this.post.createdAt.toDate().toDateString() 
        },
        getWordInfo(){
            const wordCount = this.post.content.trim().split(/\s+/g).length;
            const minutesToRead = (wordCount / 100 + 1).toFixed(0);
            return wordCount + " words. " + minutesToRead + " min read"
        }
    },
    created() {
        const router = useRouter()
        const route = useRoute()
        const userId = computed(() => route.params.id)
        // const form = reactive({ name: '', email: '' })
        onMounted(async () => {
            // const post = await getPostByName(userId.value)
            // console.log(userId.value)
            getPostByName(userId.value).then(
                posts => {
                    console.log(posts)
                    this.loading = false
                    this.post = posts[0]
                    return this.post
                }
            )
    })
  }
}
</script>

<style scoped>
/* @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
@import url("../styles/base.css");
@import url("../styles/basic-grid.css");
@import url("../styles/photo-grid.css"); */
/* .markdown h1,
.markdown h2,
.markdown h3,
.markdown h4,
.markdown h5,
.markdown h6 {
  margin-top: 24px;
  margin-bottom: 16px;
  font-weight: 600;
  line-height: 1.25;
}

.markdown h2 {
  font-weight: 600;
  padding-bottom: .3em;
  font-size: 1.5em;
  border-bottom: 1px solid #21262d;
}

.markdown h3 {
  font-weight: 600;
  font-size: 1.25em;
}

.markdown h4 {
  font-weight: 600;
  font-size: 1em;
}

.markdown p {
  margin-top: 0;
  margin-bottom: 10px;
}

.markdown ul,
.markdown ol {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 2em;
} */
/* .markdown{
    background-color: brown;
    list-style: inside !important;
}
.markdown > ol{
    list-style: inside !important;
    background-color: yellow;
} */
</style>