<template>
    <nav class="flex container mx-auto justify-between p-6 items-center bg-gray">
    <router-link to="/" class="text-4xl font-bold">Ian<span class="text-primaryColor">.</span></router-link> 
    <button class="w-32 btns border-2 border-black py-2 hover:text-white font-bold hover:bg-primaryColor ease-out duration-300 hover:scale-[1.1]"  @click="openModal">Let's talk</button>
  </nav>

  <!--Dialog Box-->
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-4xl transform overflow-hidden rounded-xl bg-white p-8 text-left align-middle shadow-xl transition-all"
            >
              <div class="flex flex-col md:flex-row justify-between items-center md:items-start">
                <div class="flex flex-col w-full md:w-1/2 space-y-6 md:space-y-10">
                    <DialogTitle
                as="h3"
                class="text-4xl font-bold leading-6 text-gray-900 font-roboto"
              >
                Let's talk<span class="text-primaryColor">.</span>
                  
            </DialogTitle>
              <p class="w-full border-4 border-transparent border-l-primaryColor pl-3 text-sm">
                  Want to say hello or just offer some feedback?<br/>Feel free to reach me at anytime.
                </p>
                <div class="flex space-x-4 items-center">
                    <i class="fa-solid fa-envelope text-md"></i>
                    <p>ianmugenya@gmail.com</p>
                </div>
                </div>
              <div class="flex flex-col w-full md:w-1/2">
                <div class="mt-4">
                
              </div>
             <div>
              <form>
              <div clas="flex flex-col">
                <div class="flex space-y-4 md:space-y-0 flex-col md:flex-row justify-between md:space-x-4">
                    <div class="flex flex-col">
                        <label class="text-sm font-bold">Name</label>
                    <input type="text" class="w-full md:w-36 border border-black rounded-md p-2 btns focus:outline-none focus-visible:ring-2 focus-visible:ring-primaryColor focus:border-none  transition-shadow" v-model="name"/>
                    </div>
                    <div class="flex flex-col">
                        <label class="text-sm font-bold">Email</label>
                    <input type="email" class="w-full md:w-3/4 border border-black rounded-md p-2 btns focus:outline-none focus-visible:ring-2 focus-visible:ring-primaryColor focus:border-none  transition-shadow" v-model="email"/>
                    </div>
                </div>
                <textarea class="mt-12 w-full form-textarea h-32 focus:bg-gray-300 border border-black focus:outline-none focus-visible:ring-2 focus-visible:ring-primaryColor focus:border-none rounded-md btns transition-shadow" v-model="message"></textarea>
              </div>  
               
              </form>
             </div>
              <div class="mt-8 text-right">
                <button
                  type="submit"
                  class="inline-flex
                
                  justify-center rounded-md border border-transparent bg-primaryColor px-16 py-2 text-sm font-medium text-white hover:bg-orange-400 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                  @click="sendEmail"
                >
                  Send 
                </button>
              </div>
              </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script lang="ts">
    import { ref, defineComponent } from 'vue'
    import emailjs from 'emailjs-com';
    import { useToast } from "vue-toastification";
    import {
      TransitionRoot,
      TransitionChild,
      Dialog,
      DialogPanel,
      DialogTitle,
    }  from '@headlessui/vue'
    
    export default defineComponent({
      setup(){
       const isOpen = ref(false)
       return {
        isOpen
       }
      },
      components:{
          TransitionChild,
          TransitionRoot,
          Dialog,
          DialogPanel,
          DialogTitle
         },
         data(){
           return{
             name: '',
             email: '',
             message: '',
             toast:useToast()
           }
         },
      methods:{
        closeModal() {
      this.isOpen = false
    },
     openModal() {
      this.isOpen = true
    },
    sendEmail(){
      
     const templateParams = {
        from_name: this.name,
        from_email: this.email,
        to_name: 'Ian Mugenya',
        message: this.message,
     };
      try {
        emailjs.send(
          'service_ykmd805',
          'template_5qcid5q',
          templateParams,
          '3ldMW-PRkgwrasBTN'
      )
      this.toast.success('Message sent successfully')
      } catch (error) {
       this.toast.error('Unable to send message') 

      }
      this.closeModal()
      this.name = ''
      this.email = ''
      this.message = ''
      
    }
    }
    })
    
    </script>
    
    <style>
    
    .btns{
      box-shadow: 5px 5px 0px 0px rgba(204, 107, 107, 0.75);
    }

    
    </style>