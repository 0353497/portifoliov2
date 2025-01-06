<template>
    <div class="career-goals container mt-4">
        <h1 class="text-center">Carrière Doelen</h1>
        <div v-if="goals.length" class="row mt-4">
            <div v-for="(goal, index) in goals" :key="index" class="col-12 mb-3">
                <div class="card">
                    <div class="card-body d-flex justify-content-between align-items-center">
                        <h5 class="card-title text-primary mb-0">{{ goal.doelnaam }}</h5>
                        <p class="card-text text-muted mb-0">{{ goal.doel }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="alert alert-warning text-center">
            Er zijn nog geen doelen toegevoegd.
        </div>
    </div>
</template>

<script>
export default {
    name: "CareerGoals",
    props: {
        goals: {
            type: Array,
            required: true,
            default: () => [],
        },
    },
};
</script>

<style scoped>
.career-goals {
    font-family: Arial, sans-serif;
}

.card {
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-title {
    font-weight: bold;
}

.card-body {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>