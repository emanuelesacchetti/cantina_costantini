<script>
import AppHero from '../components/AppHero.vue';
import AppWelcome from '../components/AppWelcome.vue';
import AppHeroProducts from '../components/AppHeroProducts.vue';
import AppProducts from '../components/AppProducts.vue';
import AppHeroExperiences from '../components/AppHeroExperiences.vue';
import AppExperiences from '../components/AppExperiences.vue';

export default {
    name: 'AppHome',
    components: {
        AppHero,
        AppWelcome,
        AppHeroProducts,
        AppProducts,
        AppHeroExperiences,
        AppExperiences
    }

}
</script>

<template>
    <AppHero />
    <AppWelcome />
    <AppHeroProducts />
    <AppProducts />
    <AppHeroExperiences />
    <AppExperiences />
</template>

<style lang="scss"></style>