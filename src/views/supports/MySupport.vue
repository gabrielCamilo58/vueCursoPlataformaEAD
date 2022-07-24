<template>
  <div>
    <div class="pageTitle">
      <span class="title">Curso X</span>
      <span class="dots">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </div>
    <div class="content">
      <div class="container">
        <div class="left">
          <div class="card">
            <div class="title bg-laravel">
              <span class="text">Filtros</span>
            </div>
            <div class="modules">
              <ul class="classes">
                <li>Todos</li>
                <li>Aguardando Minha Resposta</li>
                <li>Aguardando Professor</li>
                <li>Finalizados</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="content">
            <div class="comments">
              <supportsVue />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import supportsVue from "@/components/supports.vue";
export default {
  name: "MySupports",
  components: {
    supportsVue,
  },
};
</script>