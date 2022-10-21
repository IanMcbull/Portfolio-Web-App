<template>
  <!--Blog Posts-->
  <section class="grid grid-cols-4 grid-flow-col items-center h-80 gap-12">
      <!--Cards-->
   <div class="space-y-4">
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore reiciendis cum exercitationem autem asperiores totam neque ad. .</p>
      <div>
        <p>views</p>
        <a href="#">Read the blog</a>
      </div>
   </div>
      
   <div class="space-y-4">
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore reiciendis cum exercitationem autem asperiores totam neque ad. .</p>
      <div>
        <p>views</p>
        <a href="#">Read the blog</a>
      </div>
   </div>

   <div class="space-y-4">
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore reiciendis cum exercitationem autem asperiores totam neque ad. .</p>
      <div>
        <p>views</p>
        <a href="#">Read the blog</a>
      </div>
   </div>

   <div class="space-y-4">
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore reiciendis cum exercitationem autem asperiores totam neque ad. .</p>
      <div>
        <p>views</p>
        <a href="#">Read the blog</a>
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