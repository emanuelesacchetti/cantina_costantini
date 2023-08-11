<script>
import { RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
    components: {
        AppHeader,
        AppFooter
    }
}
</script>

<template>
    <body>
        <AppHeader />
        
        <main>
            <router-view />
        </main>
        
        <AppFooter />
    </body>
</template>

<style lang="scss">
@use './styles/general.scss';
*{
    font-family: 'Cormorant Upright', serif;
}
</style>
