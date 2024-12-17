<template>
    <div class="container  d-flex justify-content-center align-items-center flex-column" style="min-height: 40vh;">
        <div class="row">
            <div class="col-12">
                <h1 class="text-center">{{ title }}</h1>
                <p class="text-center">{{ description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TextCenter',
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }
}
</script>