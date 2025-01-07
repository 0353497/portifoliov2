<template>
    <div class="progress">
        <div class="progress-bar" role="progressbar" :style="{ width: progress + '%' }" :aria-valuenow="progress"
            aria-valuemin="0" aria-valuemax="100" :class="color + (striped ? ' progress-bar-striped' : '')">
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
    }
}
</script>
<style scoped></style>