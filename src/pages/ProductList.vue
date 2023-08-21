<script>


export default {
    name: 'ProductList',

}
</script>

<template>
    <div class="external-cont">
        <div class="product-nav d-flex justify-content-center">
            <div class="product-nav-item">vino</div>
            <div class="product-nav-item">olio</div>
            <div class="product-nav-item">delizie</div>
        </div>
        <div class="row h-100 position-relative m-5">
            <div class="col-4 bottle"></div>
            <div class="col-8 text">
                <div class="wine-name">CESANESE</div>
                <div class="testo">ciao</div>
            </div>
            
        </div>
    </div>
</template>

<style scoped lang="scss">
.external-cont {
    height: 100vh;
    background-color: rgb(235, 235, 235);

    .product-nav {

        z-index: 5;
        background-color: rgb(255, 255, 255);

        .product-nav-item {
            padding: 10px;


            &:hover {
                border-bottom: 2px solid rgb(186, 163, 119);
            }

            .col-6 {
                height: 100%;
            }
        }

    }

    .bottle {
        background-image: url('cesanese-trasp.png');
        background-repeat: no-repeat;
        background-size: 170%;
        background-position: center;




    }
    .text {
        height: 30vh;
    }
    .testo {
        height: 70vh;
        width: 100vh;
        position: relative;
        margin: auto;
        top: 30%;
        border-top: 2px solid rgb(186, 163, 119);
        background-color: white;
        animation: open 2s 0s ease-in-out;

        @keyframes open {
            from {
                height: 0;
            }

            to {
                height: 50%;
            }
        }
    }
}

.wine-name {
    top: 8%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 150px;
    mix-blend-mode: difference;
    color: rgb(186, 163, 119);
    filter: invert(100%);
    animation: move 3s -1s ease-in-out;

    @keyframes move {
        from {
            transform: translateX(-30rem)
        }

        to {
            transform: translateX(0rem)
        }
    }
}
</style>