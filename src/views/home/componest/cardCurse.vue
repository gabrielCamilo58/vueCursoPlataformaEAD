<template>
  <li>
    <span :class="['card', bgName]">
      <span class="icon">
        <img :src="[image != null ? image : require('@/assets/images/icons/default.png')]" alt="" />
      </span>
      <span class="title">{{title}}</span>
      <span class="action">
         <router-link :to="{name: 'campus.modulos'}" class="btn laravel">Acessar</router-link>
      </span>
    </span>
    <span class="dots">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </li>
</template>

<script>
export default {
  name: "cardCurse",
  props: ['title', 'image', 'bgName']
};
</script>