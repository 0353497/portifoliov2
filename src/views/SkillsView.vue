<template>
    <div>
        <h1>Skills</h1>
        <p>Op deze pagina vind je een overzicht van mijn vaardigheden.</p>
        <div class="container">
            <div class="row">
                <div class="col">
                    <h2>{{ competentiesTitle }}</h2>
                    <div v-for="competentie in competenties" :key="competentie" class="d-flex align-items-center mb-3">
                        <!-- Vaardigheid -->
                        <div class="me-3" style="min-width: 150px;">
                            <strong>{{ competentie[0] }}</strong>
                        </div>
                        <!-- Voortgangsbalk -->
                        <div class="flex-grow-1">
                            <Progress :progress="competentie[1]" :color="competentie[2]" :striped="true" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Progress from '@/components/Progress.vue';
export default {
    name: 'SkillsView',
    components: {
        Progress
    },
    data() {
        return {
            competentiesTitle: 'Mijn competenties',
            competenties: [
                ['Vue.js', 30, 'bg-primary'],
                ['JavaScript', 70, 'bg-success'],
                ['HTML', 90, 'bg-danger'],
                ['CSS', 85, 'bg-warning'],
                ['C#', 65, 'bg-info'],
                ['Flutter', 20, 'bg-primary'],
                ['ASP .Net Razor', 50, 'bg-success'],
                ['PHP', 80, 'bg-danger']
            ]
        };
    }
};
</script>

<style scoped></style>
