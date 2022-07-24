<template>
    <div>
        <headerComponent/>

        <section>
            <router-view></router-view>
        </section>

        <FooterComponent/>
    </div>
</template>

<script>
import { onBeforeMount } from '@vue/runtime-core'
import FooterComponent from './components/FooterComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
export default {
    name: 'DefaultTemplate',
    setup () {
        onBeforeMount(() => {
            document.body.classList.add('page');
            document.body.classList.add('dark');

            document.title = 'Curso vue 3'
        })
    },
    components: {
    HeaderComponent,
    FooterComponent,
}

}
</script>