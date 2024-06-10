<template>
    <div class="heart-container">
        <div v-for="heart in hearts" :key="heart.id" class="heart" :style="heart.style">
            💧
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const hearts = ref([]);

const createHeart = () => {
    const id = Date.now();
    const left = Math.random() * 100 + 'vw';
    const duration = Math.random() * 3 + 2 + 's';

    hearts.value.push({
        id,
        style: {
            left,
            animationDuration: duration,
        },
    });

    setTimeout(() => {
        hearts.value = hearts.value.filter((heart) => heart.id !== id);
    }, parseFloat(duration) * 1000);
};

onMounted(() => {
    setInterval(createHeart, 300);
});
</script>


<style>
.heart-container {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

@keyframes fall {
    0% {
        transform: translateY(-100px);
        opacity: 1;
    }

    100% {
        transform: translateY(100vh);
        opacity: 0;
    }
}

.heart {
    position: absolute;
    top: -100px;
    animation: fall 5s linear infinite;
    pointer-events: none;
}

@keyframes float {
    0% {
        transform: translateY(0);
        opacity: 1;
    }

    100% {
        transform: translateY(-50px);
        opacity: 0;
    }
}

.heart svg {
    width: 30px;
    height: 30px;
    fill: url(#paint0_radial_103_1602);
}
</style>