<script>
export default {
    name: 'AppTestimonials'
}
</script>

<template>
    <div class="testimonials-cont">
        <div class="wrapper">

            <div class="container">
                <div class="title text-center p-5">TESTIMONIALS</div>
                <div class="testimonial-title text-center fw-bold fs-2">Bellissima esperienza</div>
                <p class="w-50 text-center m-auto p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
                    ipsam, nostrum eum dolore optio earum consectetur voluptatibus reiciendis et in vel hic voluptatum
                    consequatur odit consequuntur nihil soluta aperiam vero! Et corporis nisi sed impedit eaque id
                    consequuntur possimus! Quia!</p>
                <div class="row p-5">
                    <div class="col-2 d-flex align-items-center flex-column">
                        <div class="circle d-flex justify-content-center align-items-center">
                            <img src="woman-2303361_640.jpg" alt="">
                        </div>
                        <div class="text-center fw-bold name">Anna</div>
                    </div>
                    <div class="col-2 d-flex align-items-center flex-column">
                        <div class="circle d-flex justify-content-center align-items-center">
                            <img src="woman-2303361_640.jpg" alt="">
                        </div>
                        <div class="text-center fw-bold name">Anna</div>
                    </div>
                    <div class="col-2 d-flex align-items-center flex-column">
                        <div class="circle d-flex justify-content-center align-items-center">
                            <img src="woman-2303361_640.jpg" alt="">
                        </div>
                        <div class="text-center fw-bold name">Anna</div>
                    </div>
                    <div class="col-2 d-flex align-items-center flex-column">
                        <div class="circle d-flex justify-content-center align-items-center">
                            <img src="woman-2303361_640.jpg" alt="">
                        </div>
                        <div class="text-center fw-bold name">Anna</div>
                    </div>
                    <div class="col-2 d-flex align-items-center flex-column">
                        <div class="circle d-flex justify-content-center align-items-center">
                            <img src="woman-2303361_640.jpg" alt="">
                        </div>
                        <div class="text-center fw-bold name">Anna</div>
                    </div>
                    <div class="col-2 d-flex align-items-center flex-column">
                        <div class="circle d-flex justify-content-center align-items-center">
                            <img src="woman-2303361_640.jpg" alt="">
                        </div>
                        <div class="text-center fw-bold name">Anna</div>
                    </div>


                </div>


            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
.testimonials-cont {
    background-image: url('testimonials.jpg');
    background-repeat: no-repeat;
    background-size: cover;

    .wrapper {
        background-color: rgba($color: #000000, $alpha: 0.3);
        height: 100%;

        p {
            color: white;
            font-size: 18px;
        }

        .testimonial-title {
            color: white;
        }

        .title {
            font-size: 50px;
            font-weight: 600;
            color: rgb(186, 163, 119);
            text-shadow: 1px 2px rgb(255, 255, 255);
        }

        .row {

            display: flex;
            justify-content: center;
            align-items: center;

            .circle {
                height: 100px;
                width: 100px;
                border-radius: 50%;
                background-color: red;

            }

            .name {
                color: white;
            }


        }

        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }



}</style>