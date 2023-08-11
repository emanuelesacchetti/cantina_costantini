<script>
export default {
    name: 'AppFooter',

}
</script>

<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <div class="square">

                    </div>
                </div>
                <div class="col-3">
                    <div class="square">
                        <div class="text">ciao ciao ciao</div>
                        <div class="text">ciao ciao ciao</div>
                        <div class="text">ciao ciao ciao</div>
                        <div class="text">ciao ciao ciao</div>
                        <div class="text">ciao ciao ciao</div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="square">
                        <div class="text">ciao ciao ciao</div>
                        <div class="text">ciao ciao ciao</div>
                        <div class="text">ciao ciao ciao</div>
                        <div class="text">ciao ciao ciao</div>
                        <div class="text">ciao ciao ciao</div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="square">
                        <div class="text-center">follow us</div>
                        <div class="row social d-flex justify-content-between p-4 text-center">
                            <div class="col-3"><img src="instagram.png" alt=""></div>
                            <div class="col-3"><img src="whatsapp.png" alt=""></div>
                            <div class="col-3"><img src="facebook.png" alt=""></div>
                            <div class="col-3"><img src="youtube.png" alt=""></div>
                        </div>
                        <div class="text-center">review on</div>
                        <div class="row social d-flex justify-content-between p-4 text-center">
                            <div class="col"><img src="google.png" alt=""></div>
                            <div class="col"><img src="tripadvisor.png" alt=""></div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
footer {
    background-image: url('fiori-trasp.png');
    background-repeat: no-repeat;
    background-position: left;
    background-size: 40%;
}

.row {
    padding: 40px;
}

.square {
    min-height: 300px;
    text-align: center;
    display: flex;
    flex-direction: column;

    .text {
        font-size: 20px;
    }

    .row.social {


        img {
            width: 70%;
        }
    }
}
</style>