<template>
  <section id="portfolio" class="bg-gray h-auto">
    <div class="container mx-auto p-6">
      <nav class="flex space-x-8 items-center" id="nav">
        <router-link :to="{name:'blogs.vue'}" class="text-xl font-bold">Blogs</router-link>
        <router-link :to="{name:'projects.vue'}" class="text-xl font-bold">Projects</router-link>
        
      </nav>
      <hr class="mt-4" />
      <router-view></router-view>       
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  computed: {
    
  },
  methods: {
  },
});
</script>

<style>
:hover.cards {
  box-shadow: 7px 5px 0px 0px rgba(255, 123, 0, 0.75);
}
#nav .myActiveClass{
  color:#ff7b00;
}
</style>
