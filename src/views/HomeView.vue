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
  </div>
</template>

<script>

import Index from '@/components/Index.vue';
import Certificaat from '@/models/Certificaat';
import Certificaten from '@/components/Certificaten.vue';
import TextCenter from '@/components/TextCenter.vue';
import List from '@/components/List.vue';
export default {
  name: 'HomeView',
  components: {
    Index,
    Certificaten,
    TextCenter,
    List,
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
    };
  }
};
</script>
