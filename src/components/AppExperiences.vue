<script>
export default {
    name: 'AppExperiences'
}
</script>

<template>
    <div class="exp-container p-5">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <h2 class="text-center m-5 fst-italic">Le <span class="fw-bold fs-1">DEGUSTAZIONI</span></h2>
                <div></div>
                
                <div class="col-4">
                    <div class="card-exp-img">
                        <img src='deg.png'>
                        <div class="card-exp-body p-4">
                            <h3 class="fs-4 text-center fw-bold pe-3 m-0">DEGUSTAZIONE IN CANTINA</h3>
                            <p class="py-3 mb-0 text-center fw-bold">Scopri le eccellenze dei Castelli Romani degustando i nostri
                                vini
                                in abbinamento alle migliori specialità gastronomiche locali. </p>

                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card-exp-img">
                        <img src='deg-vigna.png'>
                        <div class="card-exp-body p-4">
                            <h3 class="fs-4 text-center fw-bold pe-3 m-0">DEGUSTAZIONE IN VIGNA</h3>
                            <p class="py-3 mb-0 text-center fw-bold">Nella Tenuta di Presciano, degustazione dei vini della Cantina
                                Costantini respirando i profumi della terra. </p>

                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card-exp-img">
                        <img src='ANALISI.png'>
                        <div class="card-exp-body p-4">
                            <h3 class="fs-4 text-center fw-bold pe-3 m-0">IMPARIAMO A DEGUSTARE IL VINO</h3>
                            <p class="py-3 mb-0 text-center fw-bold">Lezione di analisi sensoriale per approfondire il
                                corretto approccio al mondo del vino. </p>

                        </div>
                    </div>
                </div>
            </div>
            <div class="row d-flex justify-content-center mb-5">
                <h2 class="text-center m-5 fst-italic">Le <span class="fw-bold fs-1">EXPERIENCES</span></h2>
                <div></div>

                <div class="col-4">
                    <div class="card-exp-img">
                        <img src='vivi-vend.png'>
                        <div class="card-exp-body p-4">
                            <h3 class="fs-4 text-center fw-bold pe-3 m-0">VIVI LA VENDEMMIA!</h3>
                            <p class="py-3 mb-0 text-center fw-bold">Vivi la vendemmia!
                                Partecipa alla raccolta dell'uva e alla sua trasformazione in vino.
                            </p>

                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card-exp-img">
                        <img src='team.png'>
                        <div class="card-exp-body p-4">
                            <h3 class="fs-4 text-center fw-bold pe-3 m-0">EVENTI PRIVATI E TEAM BUILDING</h3>
                            <p class="py-3 mb-0 text-center fw-bold">Pranzo tra i filari, degustazioni al tramonto, attività di
                                vendemmia,
                                sono alcuni esempi delle nostre proposte di accoglienza.</p>

                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card-exp-img">
                        <img src='bike.png'>
                        <div class="card-exp-body p-4">
                            <h3 class="fs-4 text-center fw-bold pe-3 m-0">E-BIKE TOUR E DEGUSTAZIONE</h3>
                            <p class="py-3 mb-0 text-center fw-bold">Wine Tour in e-bike nel Parco dei Castelli Romani con
                                degustazione in cantina </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.exp-container {
    background-color: rgb(235, 235, 235);
    h2 {
        border-bottom: 2px solid rgb(186, 163, 119);
        width: 30%;
        margin: auto;
    }
    h2 span {
        color: rgb(186, 163, 119);
        text-shadow: 1px 1px black;
        
    }
    .col-4 img {
        object-fit: cover;
        border: solid 1px rgb(0, 0, 0);
        width: 100%;

    }

    .card-exp-img {
        position: relative;
    }

    .card-exp-body {
        background: rgb(255, 255, 255);
        background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 30%, rgba(255, 255, 255, 0.727328431372549) 100%);
        position: absolute;
        bottom: 0px;
        width: 100%;
        margin: auto;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;


        h3 {
            color: rgb(186, 163, 119);
            text-shadow: 0.5px 0.5px black;
            opacity: 1;
        }


    }
}</style>