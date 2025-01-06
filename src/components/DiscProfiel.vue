<template>
    <div class="disc-profile container mt-4">
        <h1 class="text-center">DISC-profiel: D/I</h1>
        <div class="profile-summary my-4">
            <h2>Overzicht</h2>
            <p class="text-muted">
                Het D/I-profiel combineert de sterke eigenschappen van het Dominante (D) en Invloedrijke (I) profiel.
                Dit betekent een sterke focus op prestaties en doelen, gecombineerd met charme en sociale vaardigheden.
            </p>
        </div>
        <div class="row">
            <div class="profile-details my-4 col-12 col-md-6">
                <h2>Kenmerken</h2>
                <ul class="list-group">
                    <li class="list-group-item"><strong>Dominant (D):</strong> Doelgericht, resultaatgericht,
                        vastberaden en
                        gedreven.</li>
                    <li class="list-group-item"><strong>Invloed (I):</strong> Charismatisch, sociaal vaardig, inspireert
                        anderen en maakt een sterke eerste indruk.</li>
                </ul>
            </div>
            <div class="profile-actions my-4 col-12 col-md-6">
                <h2>Acties</h2>
                <ul class="list-group">
                    <li class="list-group-item">Stel uitdagende doelen en werk systematisch naar succes toe.</li>
                    <li class="list-group-item">Gebruik je sociale vaardigheden om relaties te versterken en anderen
                        te
                        inspireren.</li>
                    <li class="list-group-item">Houd balans tussen werk en ontspanning om burn-out te voorkomen.
                    </li>
                </ul>
            </div>
        </div>


        <button @click="toggleMoreInfo" class="btn btn-primary d-block mx-auto">Meer Informatie</button>

        <div v-if="showMoreInfo" class="more-info alert alert-info mt-4">
            <h2>Extra Informatie</h2>
            <p>
                Het D/I-profiel blinkt uit in leidinggevende en ondernemende rollen. Mensen met dit profiel zijn
                vaak de drijvende kracht achter innovaties en teamsucces. Houd rekening met de behoefte aan
                af en toe reflectie en samenwerking om optimaal te presteren.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "DiscProfile",
    data() {
        return {
            showMoreInfo: false,
        };
    },
    methods: {
        toggleMoreInfo() {
            this.showMoreInfo = !this.showMoreInfo;
        },
    },
};
</script>

<style scoped>
.more-info {
    margin-top: 20px;
}
</style>