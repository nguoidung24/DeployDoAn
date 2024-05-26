<template>
    <div>
        <div v-if="postData">
            Trang bài viết
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
    created() {
        this.postId = this.$route.query.id
    },
    setup(props) {

    }
})
</script>