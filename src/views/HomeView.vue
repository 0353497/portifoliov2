<template>
  <div class="container">
    <Index />
    <hr>
    <Certificaten :certificaten="certificaten" />
  </div>
</template>

<script>

import Index from '@/components/Index.vue';
import Certificaat from '@/models/Certificaat';
import Certificaten from '@/components/Certificaten.vue';
export default {
  name: 'HomeView',
  components: {
    Index,
    Certificaten,
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
    };
  }
};
</script>
