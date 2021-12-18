
<template>

  <div className="w-full h-full flex flex-col justify-start items-center bg-gray-200 z-20">
        <div className="w-full flex flex-col items-start bg-gray-200">
            <h2 className=" font-bold text-4xl px-5 md:px-44 pt-12 font-mono">Blogs</h2>
            <p className="text-gray-500 text-base px-5 md:px-44 pt-3 font-mono pb-5">Last Update : 16 Dec 2021</p>
        </div>
        <div className="w-full h-full px-5 bg-gray-200" v-if="!loading">
            
            <div className="mx-5 mt-5 rounded-lg border-gray-300 border-4 bg-gray-100 py-5 px-5 text-left">
                <p className="font-bold 2xl:text-6xl lg:text-4xl md:text-3xl text-xl mb-4">{{post.title}}</p>
                <span className="text-left lg:text-xl md:text-lg text-base">{{toNow()}}</span>
                <span className="pl-5">💗 {{post.heartCount || 0}} Hearts</span>
                <div v-html="markdownToHtml()" className="mt-8"></div>
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
    // const update = async () => {
    //   await updateUser(userId.value, { ...form })
    //   router.push('/')
    //   form.name = ''
    //   form.email = ''
    // }
    // return { form, update }
  }
}
</script>
