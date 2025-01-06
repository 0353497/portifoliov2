<template>
    <div class="card" :style="{ width: width + 'rem' }">
        <img :src="resolveImgSrc" class="card-img-top" :alt="title">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">{{ description }}</p>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        width: {
            type: [Number, String],
            default: 'auto',
        },
        imgsrc: {
            type: String,
            default: 'https://via.placeholder.com/150',
        },
        title: {
            type: String,
            default: 'Card title',
        },
        description: {
            type: String,
            default: 'Card description',
        },
    },
    computed: {
        resolveImgSrc() {
            try {
                return require(`${this.imgsrc}`);
            } catch {
                return this.imgsrc;
            }
        },
    },
};
</script>

<style scoped>
.card {
    border: 1px solid #ddd;
    border-radius: 0.25rem;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-title {
    font-size: 2.25rem;
    font-weight: bold;
}

.card-img-top {
    width: 100%;
    height: auto;
}

.card-body {
    padding: 1rem;
}
</style>