<template>
  <!--Blog Posts-->
  <section class="grid items-center mt-24 gap-6 grid-cols-1 md:grid-cols-3">
      <!--Cards-->
   <div class="space-y-4 shadow-2xl" v-for="blog in blogs">
    <img :src="blog.social_image" alt="blog image" class="rounded-md"/>  
    <div class="p-6 space-y-6">
      <p>{{blog.description}}</p>
      <i class="fa-solid fa-heart text-red-500"></i><span class="ml-2">{{blog.positive_reactions_count}}</span>
      <div>
        <a :href="blog.url" target="_blank" class="font-bold border-b-4 border-orange-500 pb-1">Read the blog</a>
    </div>
      </div>
   </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mande } from "mande";
const blogShape: Array<any> = [
  {
    title: "",
    description: "",
    url: "",
    social_image: "",
  },
];
export default defineComponent({
  name: "Blogs",
  async created() {
    const blogPosts: [] = await mande(
      "https://dev.to/api/articles?username=ianmcbull"
    ).get("");
    this.blogs = blogPosts;
  },
  data() {
    return {
      blogs: blogShape,
    };
  },
});
</script>


<style>
.btns{
      box-shadow: 5px 5px 0px 0px rgba(0,0,0,0.75);
    }
</style>