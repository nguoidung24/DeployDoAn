<template>
    <div>
        <div class="w-full lg:px-48 px-5 min-h-screen" v-if="postData">
            <p class=" mt-10 mb-16 font-bold text-3xl text-center">{{ postData?.post_name }}</p>    
            <div class="no-tailwind" v-html="postData?.content">

            </div>
        </div>
        <div v-if="!postData" class="text-center">
            <p>Không tìm thấy bài viết
                -
                <NuxtLink to="/" class="text-blue-500 " role="button">
                    Trang chủ
                </NuxtLink>
            </p>
        </div>
    </div>
</template>
<script lang="js">
export default defineNuxtComponent({
    data() {
        return {
            postId: null,
            postData: null,
        }
    },
    async created() {
        this.postId = this.$route.query.id

        this.postData = await usePost(this.postId);
        
    },
    setup(props) {

    }
})
</script>