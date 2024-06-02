<template>
    <div>
        <div class="w-full lg:px-48 px-5 min-h-screen" v-if="!isLoading && postData">
            <p class=" mt-10 mb-5 font-bold text-3xl text-center">{{ postData?.post_name }}</p>    
            <div class="no-tailwind" v-html="postData?.content">

            </div>
        </div>
        <div v-if="isLoading">
            <p class="text-center">Loading...</p>
        </div>
        <div v-if="!isLoading && !postData" class="text-center">
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
            isLoading: true,
        }
    },
    async created() {
        this.postId = this.$route.query.id

        try{
            this.postData = await usePost(this.postId);

        }catch(e){

        }
        this.isLoading = false;
        
    },
    setup(props) {

    }
})
</script>