<script>
export default {
    name: 'AppHeroExperiences'
}
</script>

<template>
<div class="products-cont">
        <div class="wrapper">
            <div class="container h-100 d-flex justify-content-center align-items-center">
                <div class="p-item d-flex align-items-center justify-content-center">
                    <div>
                        <p class="fs-5">UN VIAGGIO UNICO CON</p>
                        
                        <p class="title"><span>DEGUSTAZIONI</span> <br>ED <span>EXPERIENCES</span></p>
                        
                        <p class="fs-5">ALLA SCOPERTA DEL VINO</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
.products-cont {
    height: 500px;
    background-image: url('sala-degustazione1.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    .wrapper {
        background-color: rgba($color: #000000, $alpha: 0.2);
        height: 100%;
    }

    .p-item {
        height: 300px;
        width: 50vw;

        p {
            color: white;
            text-shadow: 1px 2px black;
            font-size: 30px;
            text-align: center;

            span {
                color: rgb(186, 163, 119);
                text-shadow: 1px 2px rgb(255, 255, 255);
            }
        }

        .title {
            font-size: 60px;
            font-weight: 600;
        }
    }
}
</style>