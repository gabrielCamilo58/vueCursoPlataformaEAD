<template>
   <div class="pageTitle">
            <span class="title">Meus Cursos</span>
            <span class="dots">
                <span></span>
                <span></span>
                <span></span>
            </span>
        </div>

        <div class="content">
            <ul class="listCourses">
               <cardCurse 
               :title="'Curso title'"
               :image="null"
               :bgName="'bg-laravel'"/>
            </ul>
        </div>
</template>

<script>

import cardCurse from './componest/cardCurse.vue'
export default {
  name: 'HomeView',

  components: {
    cardCurse,
  }

}
</script>
