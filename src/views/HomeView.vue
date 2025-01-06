<template>
  <div class="container">
    <Index />
    <hr>
    <Certificaten :certificaten="certificaten" />
    <hr>
    <TextCenter title="Wie ben ik"
      description="Dit is een korte beschrijving over wie ik ben. Ik ben een softwareontwikkelaar met een passie voor het bouwen van webapplicaties en het leren van nieuwe technologieën." />
    <TextCenter title="Wat kan ik"
      description="Ik heb ervaring met verschillende programmeertalen en frameworks, waaronder Vue.js, JavaScript, HTML, CSS, C#, Flutter, ASP .Net Razor, en PHP." />
    <hr>
    <List :title="competentiesTitle" :items="competenties" />
    <hr>
    <TextCenter title="Sterkte en Zwakte"
      description="Ik ben goed in programmeren, maar ik vind het documenteren/scrum minder leuk. Dus ik zou zeggen dat mijn sterkte programmerenn is en mijn zwakte scrum" />
    <TextCenter title="Leerstijl"
      description="Mijn leerstijl is actief bezig zijn met het onderwerp/project. Ik leer niet snel uit een boek maar sneller door actief bezig te gaan en goed te oefenen." />
    <CarriereDoelen :goals="goalsArray" />
    <hr>
    <h3>Gemaakte projecten:</h3>
    <p>Check mijn github voor mijn gemaakte projecten
      <a href="https://github.com/0353497" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="36"
          height="36" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
          <path
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
        </svg></a>
    </p>
    <Contact />
  </div>

</template>

<script>

import Index from '@/components/Index.vue';
import Certificaat from '@/models/Certificaat';
import Certificaten from '@/components/Certificaten.vue';
import TextCenter from '@/components/TextCenter.vue';
import List from '@/components/List.vue';
import CarriereDoelen from '@/components/CarriereDoelen.vue';
import Contact from '@/components/Contact.vue';

export default {
  name: 'HomeView',
  components: {
    Index,
    Certificaten,
    TextCenter,
    List,
    CarriereDoelen,
    Contact,
  },
  data() {
    return {
      certificaten: [
        new Certificaat('Vue.js', 'Vue.js Certificaat', '2021-01-01'),
        new Certificaat('JavaScript', 'JavaScript Certificaat', '2021-01-01'),
        new Certificaat('HTML', 'HTML Certificaat', '2021-01-01'),
        new Certificaat('CSS', 'CSS Certificaat', '2021-01-01'),
        new Certificaat('C#', 'C# Certificaat', '2021-01-01'),
        new Certificaat('Flutter', 'Flutter Certificaat', '2021-01-01'),
        new Certificaat('ASP .Net Razor', 'ASP.Net Razor Certificaat', '2021-01-01'),
        new Certificaat('PHP', 'PHP Certificaat', '2021-01-01'),
      ],
      competentiesTitle: 'Mijn competenties',
      competenties: [
        'Vue.js',
        'JavaScript',
        'HTML',
        'CSS',
        'C#',
        'Flutter',
        'ASP .Net Razor',
        'PHP',
      ],
      goalsArray: [
        { doelnaam: 'Beter Worden met Flutter', doel: 'Meer tijd vrijmaken om een snell een goede kwaliteid een app neertezetten' },
        { doelnaam: 'Skills wedstrijden', doel: 'De skills wedstrijden doorkomen' },
        { doelnaam: 'Rijbewijs halen', doel: 'Mijn rijexamen 20 mei halen' },
      ],
    };
  }
};
</script>
<style scoped>
.bi {
  color: black;
  font-size: 2.5rem;
}

.bi:hover {
  color: rgb(72, 198, 240);
  background-color: transparent;
  -webkit-filter: drop-shadow(0px 6px 4px rgba(0, 0, 0, .7));
    filter: drop-shadow(0px 6px 4px rgba(0, 0, 0, .7));
}
</style>