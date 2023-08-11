<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            menuItems: [
                {
                    label: 'Home',
                    routeName: 'home'
                },
                {
                    label: 'Prodotti',
                    routeName: 'products'
                },
                {
                    label: 'Degustazioni',
                    routeName: 'tastings'
                },
                {
                    label: 'Experiences',
                    routeName: 'experiences'
                },
                {
                    label: 'Contatti',
                    routeName: 'contacts'
                },
                {
                    label: 'Eventi',
                    routeName: 'events'
                }

            ]
        }


    },
    methods: {
        getImageUrl(img) {
            return new URL(`../assets/img/${img}`, import.meta.url).href;
        }
    }

}
</script>

<template>
    <header class="d-flex flex-wrap justify-content-center py-3 border-bottom">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none px-3">
            <router-link :to="{ name: 'home' }"><img src="logo.png" style="width:100px;"
                    alt="logo cantina costantini"></router-link>
        </a>

        <ul class="nav nav-pills mx-2">
            <!--
                <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
                -->

            <li v-for="item in menuItems" class="nav-item d-flex align-items-center">
                <router-link :to='{ name: item.routeName }' class="nav-link color-link">{{ item.label }}</router-link>
            </li>
        </ul>
    </header>
</template>

<style scoped lang="scss">
.color-link {
    color: black;
    text-transform: uppercase;
    font-weight: bold;

    &:hover {
        color: rgb(186, 163, 119);
    }
}
li.nav-item {
    border-bottom: 2px solid transparent;
}
li.nav-item:hover {
    border-bottom: 2px solid rgb(186, 163, 119);

}
</style>