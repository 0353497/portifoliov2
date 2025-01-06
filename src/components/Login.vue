<template>
    <div class="container mt-5">
        <h2>{{ title }}</h2>
        <form @submit.prevent="handleSubmit">
            <div class="mb-3">
                <label for="email" class="form-label">E-mail</label>
                <input type="email" class="form-control" id="email" v-model="email" required />
            </div>

            <div v-if="isSignup" class="mb-3">
                <label for="name" class="form-label">Naam</label>
                <input type="text" class="form-control" id="name" v-model="name" required />
            </div>

            <div class="mb-3">
                <label for="password" class="form-label">Wachtwoord</label>
                <input type="password" class="form-control" id="password" v-model="password" required />
            </div>

            <div v-if="isSignup" class="mb-3">
                <label for="confirmPassword" class="form-label">Bevestig wachtwoord</label>
                <input type="password" class="form-control" id="confirmPassword" v-model="confirmPassword" required />
            </div>

            <button type="submit" class="btn btn-primary">{{ buttonText }}</button>
        </form>
        <LoginModal v-if="showModal" :showModal="showModal" :modalTitle="modalTitle" :modalMessage="modalMessage"
            @update:showModal="showModal = $event" />
        <p>geerligsniek@gmail.com, password</p>
    </div>
</template>

<script>


import LoginModal from './LoginModal.vue';
export default {
    components: {
        LoginModal,
    },
    props: {
        isSignup: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: 'Log in',
        },
        buttonText: {
            type: String,
            default: 'Inloggen',
        },
        successMessage: {
            type: String,
            default: 'Je bent succesvol ingelogd!',
        },
    },
    data() {
        return {
            email: '',
            name: '',
            password: '',
            confirmPassword: '',
            formSubmitted: false,
            showModal: false,
            modalTitle: '',
            modalMessage: '',
        };
    },
    methods: {
        handleSubmit() {
            if (this.isSignup && this.password !== this.confirmPassword) {
                this.modalTitle = "Fout";
                this.modalMessage = "Wachtwoorden komen niet overeen.";
                this.showModal = true;
                return;
            } else if (this.isSignup) {
                this.modalTitle = "Registratie Succesvol";
                this.modalMessage = "Je bent succesvol geregistreerd!";
                this.showModal = true;
            } else {
                if (this.email === 'geerligsniek@gmail.com' && this.password === 'password') {
                    this.modalTitle = "Inloggen Succes";
                    this.modalMessage = "Je bent succesvol ingelogd!";
                    this.showModal = true;
                } else {
                    this.modalTitle = "Inloggen Fout";
                    this.modalMessage = "Ongeldige inloggegevens!";
                    this.showModal = true;
                }
            }

            this.email = '';
            this.name = '';
            this.password = '';
            this.confirmPassword = '';
        },
    },
};
</script>

<style scoped></style>