<template>
    <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true"
        :class="{ show: showModal }" style="display: block;" @click.self="closeModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="loginModalLabel">{{ modalTitle }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                        @click="closeModal"></button>
                </div>
                <div class="modal-body">
                    <p>{{ modalMessage }}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="closeModal">
                        Sluiten
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        showModal: {
            type: Boolean,
            default: false,
        },
        modalTitle: {
            type: String,
            default: "Inloggen",
        },
        modalMessage: {
            type: String,
            default: "Je bent succesvol ingelogd!",
        },
    },
    methods: {
        closeModal() {
            this.$emit("update:showModal", false); // Emit event to close the modal
            this.$router.push("/"); // Redirect to the home page
        },
    },
};
</script>

<style scoped>
.modal-backdrop {
    display: none !important;
}
</style>