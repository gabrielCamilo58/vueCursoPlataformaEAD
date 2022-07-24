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
            

                <modulesComponents/>

                <div class="right">

                    <div class="content">
                        
                        <playerComponent/>

                        <supportsComponent/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import modulesComponents from './components/modules.vue'
import playerComponent from './components/playerComponent.vue'
import supportsComponent from './components/supports.vue'
export default {
    name: 'modeuleAndLesson',
    setup(){
        
    },
    components: {
        modulesComponents,
        playerComponent,
        supportsComponent
    }
}
</script>