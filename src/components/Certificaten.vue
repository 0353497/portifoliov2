<template>
    <div class="container" id="certificaten">
        <div class="row">
            <div class="col-12 col-md-6" v-for="(certificaat, index) in certificaten" :key="index">
                <div class="card mb-4 secondary-bg reveal">
                    <div class="card-body">
                        <h5 class="card-title">{{ certificaat.naam }}</h5>
                        <p class="card-text">{{ certificaat.beschrijving }}</p>
                        <p class="card-text"> {{ certificaat.datum }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Certificaat from './../models/Certificaat';
export default {
    name: 'Certificaten',
    props: {
        certificaten: {
            type: Array,
            required: true,
            validator(value) {
                return value.every(item => item instanceof Certificaat);
            }
        }
    }
};
</script>
<style scoped>
.secondary-bg {
    background-color: var(--background-secondary);
}
</style>