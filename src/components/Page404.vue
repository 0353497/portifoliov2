<template>
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-center align-items-center flex-column "
                style="min-height: 100vh;">
                <h1 class="text-center">404</h1>
                <p class="text-center">Page not found if you would like to go back press button</p>
                <router-link to="/" class="btn btn-primary">Go back to Home</router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Page404'
}
</script>