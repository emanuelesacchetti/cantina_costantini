<script>
export default {
    name: 'AppEvent'
}
</script>

<template>
    <div class="event-cont">
        <div class="container">
            <div class="row d-flex justify-content-center align-items-center">
                <div class="col-3 d-flex flex-column p-5">
                    <h2 class="text-start">Gli <span>EVENTI</span></h2>
                    <h2 class="text-end">e le <span>NEWS</span></h2>
                </div>
                <div class="col-9">
                    <div class="row">
                        <div class="col-3 square">
                            <div class="card">
                                <img src="vivi-vend.png" alt="">
                                <div class="text text-center">
                                    <div class="title">VIVI LA VENDEMMIA</div>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, dicta!</p>
                                    <p>21-22-23/04/23</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-3 square">
                            <div class="card">
                                <img src="infiorata.png" alt="">
                                <div class="text text-center">
                                    <div class="title">INFIORATA</div>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, dicta!</p>
                                    <p>21-22-23/04/23</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-3 square">
                            <div class="card">
                                <img src="vino.jpg" alt="">
                                <div class="text text-center">
                                    <div class="title">VINO</div>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, dicta!</p>
                                    <p>21-22-23/04/23</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-3 square">
                            <div class="card">
                                <img src="OLIVE.jpg" alt="">
                                <div class="text text-center">
                                    <div class="title">L'OLIO</div>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, dicta!</p>
                                    <p>21-22-23/04/23</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.event-cont {
    background-color: rgb(235, 235, 235);
    padding: 100px 0;
}

span {
        color: rgb(186, 163, 119);
        text-shadow: 1px 1px black;
        
    }
.square {
    min-height: 400px;
    
    padding: 10px;

    .card {
        height: 100%;
        border-radius: 0;
        position: relative;

        img {
            height: 80%;
            width: 100%;
        }

        .text {
            position: absolute;
            background: rgb(255, 255, 255);
            background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 49%, rgba(255, 255, 255, 0.727328431372549) 100%);
            height: 40%;
            width: 100%;
            bottom: 0;
            left: 0;
            padding: 5px;
        }
    }
}</style>