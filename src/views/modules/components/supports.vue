<template>
  <div class="comments">
    <div class="header">
      <span class="title">Dúvidas</span>
      <button class="btn primary">
        <i class="fas fa-plus"></i>
        Enviar nova dúvida
      </button>
    </div>
    <supportGlobalComponent/>
  </div>
</template>

<script>
import supportGlobalComponent from '@/components/supports.vue';
export default {
  name: "supportComponent",
  components: {
    supportGlobalComponent,
  }
};
</script>