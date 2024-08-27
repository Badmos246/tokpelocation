<script setup>
import Layout from "@/components/Layout.vue";
import myImage from "@/assets/images/logorent.png";
import { ref } from "vue";


const cacherCategorie = ref(false)

function cacher() {
    cacherCategorie.value = !cacherCategorie.value 
}

</script>

<template>
  <div class="bg-black w-full flex items-center justify-between px-4 h-16">
    <img :src="myImage" alt="" class=" w-20" />
    <nav class="justify-center items-center">
      <ul class="space-x-7 font-medium flex items-center">
        <li>
          <RouterLink class="text-white" to="/acceuil">ACCEUIL</RouterLink>
        </li>
        <li><RouterLink class="text-white" to="/services">NOS SERVICES</RouterLink></li>
        <li><RouterLink class="text-white" to="/catalogue">VEHICULES</RouterLink></li>
        <li class="relative" >
          <div @click="cacher"   class="text-white cursor-pointer" >CATEGORIE &#x25BE;</div>
          <ul v-if="cacherCategorie"  class="dropdown bg-black absolute -bottom-28 -left-0 w-40 space-y-2">
            <li><RouterLink class="text-white pl-4" to="/bus">BUS</RouterLink></li>
            <li><RouterLink class="text-white pl-4" to="/minibus">MINIBUS</RouterLink></li>
            <li><RouterLink class="text-white pl-4" to="/camions">CAMIONS</RouterLink></li>
          </ul>
        </li>
      </ul>
    </nav>
    <div class="flex items-center gap-5">
      <RouterLink class="text-white" to="/connexion">SE CONNECTER</RouterLink>
      <RouterLink class="bg-slate-100 px-4 py-2 rounded-md" to="/inscription">S'INSCRIRE</RouterLink
      >
    </div>
  </div>
</template>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap");
* {
  font-family: "Nunito";
}
</style>
