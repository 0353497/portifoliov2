<template>
    <div class="container mt-5">
        <div v-if="formSubmitted" id="contactSucces" class="alert alert-success mt-3 reveal" role="alert">
            Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.
        </div>
        <h2>Contacteer mij</h2>
        <form @submit.prevent="handleSubmit">
            <div class="mb-3">
                <label for="name" class="form-label">Naam</label>
                <input type="text" class="form-control" id="name" v-model="name" required />
            </div>

            <div class="mb-3">
                <label for="email" class="form-label">E-mail</label>
                <input type="email" class="form-control" id="email" v-model="email" required />
            </div>

            <div class="mb-3">
                <label for="message" class="form-label">Bericht</label>
                <textarea class="form-control" id="message" rows="4" v-model="message" required></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Verstuur</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            message: '',
            formSubmitted: false,
        };
    },
    methods: {
        handleSubmit() {
            document.querySelector('#contactSucces').classList.add('active');
            this.formSubmitted = true;
            this.name = '';
            this.email = '';
            this.message = '';
        },
    },
};
</script>

<style scoped></style>