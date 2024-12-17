<template>
    <div class="container-fluid min-vh-100 d-flex justify-content-center align-items-center">
        <div class="row w-100 text-center">
            <div class="col-md-4 d-flex justify-content-center mb-4 mb-md-0">
                <img src="./../assets/niek.jpg" alt="Mijn Gezicht" class="img-fluid rounded-circle img" />
            </div>

            <div class="col-md-8 d-flex align-items-center justify-content-center text-center">
                <div>
                    <h1 class="display-4 mb-3">Welkom op mijn Portfolio</h1>
                    <p class="lead mb-4">Hallo, ik ben <span class="naam">Niek</span>, een gepassioneerde Software dev
                        met ervaring in Vue. Hier kun je mijn projecten en werk verkennen.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PortfolioHome'
};
</script>

<style scoped>
.portfolio-container {
    background-color: #f8f9fa;
    color: #343a40;
}

.naam {
    font-size: 1.4em;
    font-weight: bold;
}

.img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    object-fit: cover;
}
</style>