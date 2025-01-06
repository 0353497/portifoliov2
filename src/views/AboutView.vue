<template>
  <div class="container">
    <DiscProfiel />
    <hr>
    <Card title="Enneagram"
      description="Dit is mijn eneagram, er staat niet veel info. Maar ik heb nu al 3 test genomen en moest voor alle resultaten betalen"
      imgsrc="/assets/Enneagram.png">
      <p class="card-text">
        Dit enneagramprofiel laat zien dat jouw dominante type Enneagram Type 8 is. Volgens de beschrijving ben ik:
      </p>
      <ol>
        <li class="card-text">
          Onafhankelijk: Je bent gemotiveerd om de leiding te nemen, zowel over jezelf als over anderen.
          Assertief en gepassioneerd: Je hebt een krachtige aanwezigheid en benadert het leven met zelfvertrouwen en
          vastberadenheid.
        </li>
        <li class="card-text">
          Natuurlijk leider: Je beschikt over kwaliteiten die je in staat stellen verantwoordelijkheid te nemen,
          moeilijke
          beslissingen te maken en actie te ondernemen.
          Je bent iemand die niet bang is om uitdagingen aan te gaan en je eigen pad te volgen. Je waardeert autonomie
          en
          hebt een sterke wil. Tegelijkertijd kun je een sterke invloed hebben op de mensen om je heen, dankzij je
          daadkrachtige en energieke persoonlijkheid.
        </li>
      </ol>
      <p class="card-text">
        Als je meer inzicht wil in je volledige profiel, kun je overwegen om het rapport te ontgrendelen, dat mogelijk
        dieper ingaat op je minder dominante types en de balans tussen je eigenschappen.
      </p>
    </Card>
    <hr>
    <h3>CV/Persoonlijkheidprofiel</h3>
    <embed class="embed" src="/assets/CV Niek.pdf" type="application/pdf" frameBorder="0" scrolling="auto"
      width="100%"></embed>

  </div>
</template>

<script>

import Card from '@/components/Card.vue';
import DiscProfiel from '@/components/DiscProfiel.vue';
export default {
  name: 'HomeView',
  components: {
    Card,
    DiscProfiel,
  },
  data() {
  }
};
</script>
<style scoped>
hr {
  margin: 2rem 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  font-size: 1.5rem;
}

.embed {
  height: 100vh;
}
</style>