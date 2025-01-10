<template>
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-center align-items-center flex-column "
                style="min-height: 100vh;">
                <h1 class="text-center">404</h1>
                <p class="text-center">Page not found if you would like to go back press button</p>
                <button to="/" class="btn btn-primary" @click="PlayanimationAndRoute()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                        class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                    </svg>
                    <span class="bigger">Go back to Home</span></button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Page404',
    methods: {
        PlayanimationAndRoute() {
            const element = document.querySelector('.bi-arrow-left');
            element.classList.add('moveArrow');
            setTimeout(() => {
                this.$router.push('/');
            }, 1100);
        }
    }

}
</script>
<style scoped>
.bigger {
    text-align: center;
    font-size: 1.1rem;
    display: inline-flex;
    margin-left: 5px;
}
</style>