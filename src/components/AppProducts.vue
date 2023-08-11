<script>
export default {
    name: 'AppProducts'
}
</script>

<template>
    <div class="prod-container p-5 pb-0">
        <div class="container h-100">
            <div class="row h-100 d-flex pb-0">
                <div class="col-6 text-col d-flex justify-content-center align-items-center">
                    <div>

                        <h2 class="fs-1 p-3">
                            <div class="fs-6">LA PASSIONE</div>
                            IL <span>VINO</span>
                        </h2>
                        <div class="line"></div>
                        <p class="p-3">LA PRODUZIONE DEL VINO AVVIENE CON ATTREZZATURE
                            E METODI TRADIZIONALI, TRAMANDATI
                            DI PADRE IN FIGLIO CERCANDO DI CONSERVARE E VALORIZZARE LA TIPICITà E LA
                            GENUINITà DELLE NOSTRE UVE.
                            CI OCCUPIAMO PERSONALMENTE DI OGNI SINGOLA FASE DEL PROCESSO
                            DI PRODUZIONE DEL VINO E SEGUIAMO CON LA MASSIMA CURA
                            OGNI FASE DELLA LAVORAZIONE, DALLA COLTIVAZIONE
                            MANUALE DELLA VITE FINO ALL'IMBOTTIGLIAMENTO.
                        </p>
                        <br>
                        <div class="btn btn-outline-dark fw-bold m-3">SCOPRI</div>
                    </div>
                </div>
                <div class="col-6 image-col p-0">

                    <img src="vino.jpg" alt="">


                </div>
            </div>
        </div>
    </div>


    <div class="prod-container p-5 py-0">
        <div class="container h-100">
            <div class="row h-100 d-flex py-0">

                <div class="col-6 image-col p-0">

                    <img src="OLIVE.jpg" alt="">

                </div>
                <div class="col-6 text-col d-flex justify-content-center align-items-center h-100">
                    <div>

                        <h2 class="fs-1 p-3">
                            <div class="fs-6">LA TRADIZIONE</div>
                            L' <span>OLIO</span>
                        </h2>
                        <div class="line"></div>
                        <p class="p-3">OLIO DI CATEGORIA SUPERIORE, NON FILTRATO ED OTTENUTO CON LE OLIVE
                            PROVENIENTI DAL NOSTRO ULIVETO. LE VARITà SONO QUELLE TIPICHE DEL TERRITORIO DEI CASTELLI
                            ROMANI,
                            FRANTOIO E LECCINO IN PARTICOLARE. LA RACCOLTA MANUALE E L'IMMEDIATA MOLITURA A FREDDO,
                            CI CONSENTONO DI MANTENERE INTEGRE LE PROPRIETà DELLE NOSTRE OLIVE E DI
                            OTTENERE UN OLIO EXTRA VERGINE CON BASSISSIMA ACIDITà E CON UN GUSTO DELICATO.
                        </p>
                        <br>
                        <div class="btn btn-outline-dark fw-bold m-3">

                            <router-link :to="{ name: 'products' }" class="nav-link">
                                SCOPRI
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="prod-container p-5 pt-0">
        <div class="container h-100">
            <div class="row h-100 d-flex pt-0">
                <div class="col-6 text-col d-flex justify-content-center align-items-center">
                    <div>

                        <h2 class="fs-1 p-3">
                            <div class="fs-6">L'AMORE</div>
                            LE <span>DELIZIE</span>
                        </h2>
                        <div class="line"></div>
                        <p class="p-3">LE "DELIZIE DI SERENA" SONO UNA NUOVA LINEA DI CONSERVE DOLCI E SALATE DELLA CANTINA.
                            L'AZIENDA PRODUCE DA SECOLI VINO E OLIO D'OLIVA ED ORA, CON LA FRUTTA E GLI ORTAGGI DEI PRORPI TERRENI, AMPLIA LA GAMMA DI PRODOTTI.
                            SERENA SI DEDICA ALLA PRODUZIONE DI CONSERVE AL 100% NATURALI, UTILIZZANDO UN'ALTISSIMA CONCENTRAZIONE DI FRUTTA CHE VIENE COTTA 
                            ARTIGIANALMENTE SOTTOVUOTO A BASSA TEMPERATURA.
                            QUESTA TECNICA FA Sì CHE VENGANO MANTENUTE INTATTE LE PROPRIETà E LE CARATTERISTICHE ORGANOLETTICHE DEI FRUTTI DELLA TERRA.

                        </p>
                        <br>
                        <div class="btn btn-outline-dark fw-bold m-3">SCOPRI</div>
                    </div>
                </div>
                <div class="col-6 image-col p-0">

                    <img src="CONFETTURE.png" alt="">


                </div>
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">
.prod-container {
    background-color: rgb(235, 235, 235);


    .container {
        height: 100%;

        .row {
            height: 100%;
            padding: 1rem;
        }

        img {
            width: 100%;
            height: 100%;
        }

        .text-col {
            background-color: white;
            padding: 80px;

            h2 {
                margin: 0;
            }

            span {
                color: rgb(186, 163, 119);
            }

            .line {
                height: 2px;
                background-color: rgb(186, 163, 119);
                width: 200px;
                margin-left: 1rem;
            }

            p {
                font-size: 0.9rem;
            }
        }



    }


}
</style>