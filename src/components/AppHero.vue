<script>
export default {
    name: 'AppHero',
}
</script>

<template>
    <div class="hero-cont">
        <div class="wrapper">
            <div class="container h-100 d-flex justify-content-center align-items-center">
                <div class="p-item d-flex align-items-center justify-content-center">
                    <div>
                        <p class="fs-5">DAL <span class="fs-2"> 1721</span></p>

                        <p class="title">IL <span id="mimmo" class="fst-italic">VINO</span> DEI CASTELLI ROMANI</p>

                        <p class="fs-5">DI PADRE IN FIGLIO</p>
                    </div>
                    <p>
                        <br>
                        <br>

                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.hero-cont {
    height: 500px;
    background-image: url('wine-4565911_1920.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    .wrapper {
        background-color: rgba($color: #000000, $alpha: 0.3);
        height: 100%;
    }

    .p-item {
        height: 300px;
        width: 50vw;

        p {
            color: white;
            text-shadow: 1px 2px black;
            font-size: 50px;
            text-align: center;

            span {
                color: rgb(186, 163, 119);
            }


        }

        .title {
            font-size: 60px;
            font-weight: 600;
            /*
            #mimmo {
                mix-blend-mode: saturation;

            }
            */
        }
    }
}</style>