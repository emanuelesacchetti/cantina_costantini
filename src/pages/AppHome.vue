<script>
import AppHero from '../components/AppHero.vue';
import AppWelcome from '../components/AppWelcome.vue';
import AppHeroProducts from '../components/AppHeroProducts.vue';
import AppProducts from '../components/AppProducts.vue';
import AppHeroExperiences from '../components/AppHeroExperiences.vue';
import AppExperiences from '../components/AppExperiences.vue';
import Apptestimonials from '../components/Apptestimonials.vue';
import AppEvent from '../components/AppEvent.vue';

export default {
    name: 'AppHome',
    components: {
        AppHero,
        AppWelcome,
        AppHeroProducts,
        AppProducts,
        AppHeroExperiences,
        AppExperiences,
        Apptestimonials,
        AppEvent
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
    <Apptestimonials />
    <AppEvent />
</template>

<style lang="scss"></style>