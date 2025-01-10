<template>
    <div class="progress">
        <div class="progress-bar" role="progressbar" :style="{ width: animatedProgress + '%' }"
            :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100"
            :class="color + (striped ? ' progress-bar-striped' : '')">
            {{ progress }}%
        </div>
    </div>
</template>

<script>
export default {
    name: 'Progress',
    props: {
        progress: {
            type: Number,
            required: false,
            default: 0,
            validator(value) {
                return value >= 0 && value <= 100;
            }
        },
        color: {
            type: String,
            required: false,
            validator(value) {
                const validColors = ['bg-primary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-info'];
                return validColors.includes(value);
            },
            default: 'bg-primary'
        },
        striped: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    data() {
        return {
            animatedProgress: 0
        };
    },
    mounted() {
        this.animatedProgress = 0;
        setTimeout(() => {
            this.animatedProgress = this.progress;
        }, 50);
    }
};
</script>

<style scoped>
.progress-bar {
    transition: width 2s ease-in-out;
}
</style>
