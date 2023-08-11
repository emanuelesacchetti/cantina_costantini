<script>
export default {
    name: 'AppWelcome'
}
</script>

<template>
    <div class="welcome-container p-5">
        <div class="container py-5 ">
            <h2 class="text-center m-5 fst-italic">Benventuti nella Cantina <span class="fs-2">COSTANTINI</span></h2>
            <div class="line"></div>
            <div class="welcome-cont d-flex justify-content-between p-3">
                <div class="welcome-item pe-3 fs-6">
                    <p>A GENZANO DI ROMA, NEL CUORE DI CASTELLI ROMANI, LA FAMIGLIA COSTANTINI PRODUCE VINO DAL 1721.</p>

                    <p>DA QUANDO SIAMO ARRIVATI A GENZANO ABBAIMO INIZIATO A PRODURRE VINO SENZA MAI INTERROMPERE LA
                        TRADIZIONE.</p>

                    <p>CON I NOSTRI 300 ANNI DI ATTIVITÀ SIAMO QUINDI TRA LE PIÙ ANTICHE CANTINE DEI CASTELLI ROMANI E
                        PROBABILMENTE DI TUTTA L'ITALIA.</p>

                </div>
                <div class="welcome-item ps-3 fs-6">
                    <p>LA FILOSOFIA DELLA CANTINA È SEMPRE STATA QUELLA DI SALVAGUARDARE IL CARATTERE FAMILIARE DELLA
                        PRODUZIONE.</p>
                    <p>LA VINIFICAZIONE AVVIENE NEI LOCALI DEL CENTRO STORICO DEL PAESE DI GENAZNO DI ROMA CON METODI ED
                        ATTREZZATURE TRADIZIONALI
                        , TRAMANDATI DI PADRE IN FIGLIO MA CON ATTENZIONE ALLE NUOVE TECNICHE DI PRODUZIONE.</p>

                </div>
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">
.welcome-container {
    background-color: rgb(235, 235, 235);

    h2 {
        font-size: 35px;
        font-weight: 700;
        
    }

    h2 span {
        color: rgb(186, 163, 119);
        text-shadow: 0.5px 0px black;
    }
    .line {
        height: 2px;
        background-color: rgb(186, 163, 119);
        width: 30%;
        margin: 0 auto 30px;
    }

    .welcome-item {
        width: 50%;
        font-size: 17px;

        p {
            font-weight: 600;

        }
    }
}</style>