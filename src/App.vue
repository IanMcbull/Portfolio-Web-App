<template>
  <div class="h-screen bg-gray">
    <the-navigation-bar/>
  <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheNavigationBar from './components/TheNavigationBar.vue'
export default defineComponent({
  components:{
    TheNavigationBar
  }
})
</script>
